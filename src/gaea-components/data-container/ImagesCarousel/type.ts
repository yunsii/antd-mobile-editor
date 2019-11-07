import { addInjectToEditor } from '@/utils/gaea';

export type ImagesCarouselData = string[];

export class Props {
  public editSetting = {
    key: 'images-carousel',
    name: 'ImagesCarousel',
    editors: [
      ...addInjectToEditor(['dataSource']),
      'Function',
      {
        type: 'array',
        field: 'images',
        text: 'Images',
        data: 'string',
      },
    ],
  };

  public images: ImagesCarouselData = ['https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png'];
}

export class State { }
