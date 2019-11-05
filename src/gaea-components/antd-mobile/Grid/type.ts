export class Props {
  public editSetting = {
    key: 'grid',
    name: 'Grid',
    editors: [
      'Layout',
      {
        type: 'box-editor'
      },
      'Function',
      {
        type: 'array',
        field: 'data',
        text: 'Data',
        data: [{
          type: "string",
          field: "icon",
          text: "Icon",
        }, {
          type: "string",
          field: "text",
          text: "Text",
        }]
      },
      {
        field: 'columnNum',
        text: 'ColumnNum',
        type: 'number'
      },
      {
        field: 'carouselMaxRow',
        text: 'CarouselMaxRow',
        type: 'number'
      },
      'Style',
      {
        field: 'hasLine',
        text: 'HasLine',
        type: 'boolean',
      },
      {
        field: 'isCarousel',
        text: 'IsCarousel',
        type: 'boolean',
      },
      {
        field: 'square',
        text: 'Square',
        type: 'boolean',
      },
    ],
    events: [
      {
        text: 'OnClick',
        field: 'onClick'
      }
    ]
  };

  public data: any[] = [{
    text: 'name', icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
  }];
  public columnNum: number = 4;
  public hasLine: boolean = true;
  public isCarousel: boolean = false;
  public carouselMaxRow: number = 2;
  public square: boolean = true;
  public onClick = () => {
    //
  };
}

export class State { }