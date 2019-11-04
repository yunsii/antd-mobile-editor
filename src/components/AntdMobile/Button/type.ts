export class Props {
  public editSetting = {
    key: 'm-button',
    name: 'M-Button',
    editors: [
      'Layout',
      {
        type: 'box-editor'
      },
      'Function',
      {
        field: 'text',
        text: 'Text',
        type: 'string'
      },
      'Style',
      {
        field: 'inline',
        text: 'Inline',
        type: 'boolean',
      },
      {
        field: 'type',
        text: 'Type',
        type: 'select',
        data: [
          {
            value: undefined,
            text: 'Default'
          },
          {
            value: 'primary',
            text: 'Primary'
          },
          {
            value: 'warning',
            text: 'Warning'
          },
          {
            value: 'ghost',
            text: 'Ghost'
          }
        ]
      },
      {
        field: 'icon',
        text: 'Icon',
        type: 'string'
      },
      {
        field: 'loading',
        text: 'Loading',
        type: 'boolean'
      },
      {
        field: 'size',
        text: 'Size',
        type: 'select',
        data: [
          {
            value: 'small',
            text: 'Small'
          },
          {
            value: 'large',
            text: 'Large/Default'
          }
        ]
      }
    ],
    events: [
      {
        text: 'OnClick',
        field: 'onClick'
      }
    ]
  };

  public className: string | undefined;
  public inline: boolean = false;
  public icon = undefined;
  public activeClassName: string | undefined;
  public activeStyle: React.CSSProperties = {};
  public style: React.CSSProperties = {};
  public type?: ButtonType;
  public size: string = 'large';
  public loading = false;
  public disabled: boolean = false;
  public text: string = 'Button Text';
  public onClick = () => {
    //
  };
}

export class State { }

type ButtonType = 'primary' | 'warning' | 'ghost';
