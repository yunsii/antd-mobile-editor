import { addInjectToEditor } from '@/utils/gaea';

export type ImagesCarouselData = string[];

export class Props {
  public editSetting = {
    key: 'images-carousel',
    name: 'ImagesCarousel - 图片轮播',
    editors: [
      ...addInjectToEditor(['dataSource', 'dataLoading']),
      'Function',
      {
        type: 'array',
        field: 'images',
        text: 'Images',
        data: 'string',
      },
    ],
  };

  public data: ImagesCarouselData = [];
  public loading: boolean = false;
}

export class State { }
