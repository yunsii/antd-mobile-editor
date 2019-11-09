import { addInjectToEditor } from '@/utils/gaea';

export type ImagesCarouselData = string[];

export class Props {
  public editSetting = {
    key: 'page-wrapper',
    name: 'PageWrapper - 页面导航',
    isContainer: true,
    editors: [
      ...addInjectToEditor(['dataSource']),
      'Function',
      {
        type: 'string',
        field: 'title',
        text: 'Title',
      },
      {
        type: 'boolean',
        field: 'backable',
        text: 'Backable',
      },
      {
        type: 'string',
        field: 'backPath',
        text: 'BackPath',
      },
    ],
  };

  public title?: any = '标题';
  public backable?: boolean = true;
  public backPath?: string;
}

export class State { }
