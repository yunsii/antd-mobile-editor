export class Props {
  public editSetting = {
    key: 'images-carousel',
    name: 'ImagesCarousel',
    editors: [
      'Inject',
      {
        type: 'string',
        field: 'dataSource',
        text: 'DataSource',
      },
      'Function',
      {
        type: 'array',
        field: 'images',
        text: 'Images',
        data: 'string',
      },
    ],
  };

  public images: string[] | [] = ['https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'];
}

export class State { }
