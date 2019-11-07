export class Props {
  public editSetting = {
    key: 'simple-card',
    name: 'SimpleCard - 简单卡片',
    isContainer: true,
    editors: [
      'Function',
      {
        type: 'string',
        field: 'title',
        text: 'Title',
      },
      {
        type: 'string',
        field: 'extra',
        text: 'Extra',
      },
    ],
  };

  public title: string = 'SimpleCard';
  public extra: string = '';
}

export class State { }
