import { addInjectToEditor } from '@/utils/gaea';

export type ImagesCarouselData = string[];

export class Props {
  public editSetting = {
    key: 'images-carousel',
    name: 'ImagesCarousel - 图片轮播',
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

  public images: ImagesCarouselData = ['https://avatars2.githubusercontent.com/u/18096089?s=400&u=ac70c17caf8cb7e48d0a4f8b8ef28825688cbb8d&v=4', 'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png'];
}

export class State { }
