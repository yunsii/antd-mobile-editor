export class Props {
  public editSetting = {
    key: 'white-space',
    name: 'WhiteSpace - 上下留白',
    editors: [
      'Layout',
      {
        type: 'box-editor'
      },
      'Style',
      {
        field: 'size',
        text: 'Size',
        type: 'select',
        data: [{
          text: 'xs',
          value: 'xs',
        }, {
          text: 'sm',
          value: 'sm',
        }, {
          text: 'md',
          value: 'md',
        }, {
          text: 'lg',
          value: 'lg',
        }, {
          text: 'xl',
          value: 'xl',
        }]
      },
    ],
  };

  public size: WhiteSpaceSize = 'md';
}

export class State { }

type WhiteSpaceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
