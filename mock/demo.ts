import { delay } from 'roadhog-api-doc'

export default delay({
  'GET /demo/project-info/:id': (req, res) => {
    const { id } = req.params;
    res.send({
      status: 'ok',
      data: [
        {
          label: 'ID',
          value: id,
        },
        {
          label: '名称',
          value: '一个项目',
        },
        {
          label: '预算',
          value: '一个亿',
        },
        {
          label: '工期',
          value: '一个月',
        },
      ],
    });
  },
}, 1000);
