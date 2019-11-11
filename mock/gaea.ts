import fs from 'fs';

const relativeJsonsPath = '/src/assets/gaea-json';

export default {
  'GET /gaea/jsons': (req, res) => {
    fs.readdir(`${process.cwd()}${relativeJsonsPath}`, (err, files) => {
      if (err) {
        res.send({
          status: 'error',
          message: err.message,
        })
      } else {
        const result: string[] = [];
        files.forEach((file) => {
          result.push(file);
        });
        res.send({
          status: 'ok',
          data: result,
        })
      }
    });
  },

  'GET /gaea/get-json/:name': (req, res) => {
    const { name } = req.params;
    const relativePath = `${relativeJsonsPath}/${name}`;
    const readPath = `${process.cwd()}${relativePath}`.replace(/\\/g, '/');
    try {
      const renderJson = fs.readFileSync(readPath, { encoding: 'utf-8' });
      res.send({
        status: 'ok',
        data: JSON.parse(renderJson),
      });
    } catch (err) {
      res.send({
        status: 'error',
        message: err.message,
      });
    }
  },

  'POST /gaea/save-json/:name': (req, res) => {
    const { name }: { name: string } = req.params;
    const { renderJson } = req.body;
    const relativePath = `${relativeJsonsPath}/${name}${name.endsWith('.json') ? '' : '.json'}`;
    const savePath = `${process.cwd()}${relativePath}`.replace(/\\/g, '/');
    try {
      fs.writeFileSync(savePath, `${JSON.stringify(renderJson, null, 2)}\n`);
      res.send({
        status: 'ok',
        data: relativePath,
      });
    } catch (err) {
      res.send({
        status: 'error',
        message: err.message,
      });
    }
  },
};
