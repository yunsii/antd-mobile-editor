import { DescriptionsData } from "@/gaea-components/display/Descriptions/type";
import { GirdData, HandleGridClick } from "@/gaea-components/antd-mobile/Grid/type";
import { ImagesCarouselData } from "@/gaea-components/data-container/ImagesCarousel/type";
import { SetFormItems, HandleSubmit } from "@/gaea-components/data-container/Form/type";

declare type InjectPropsValue =
  | DescriptionsData
  | GirdData
  | HandleGridClick
  | ImagesCarouselData
  | SetFormItems
  | HandleSubmit
  | boolean  // loading and etc

declare interface InjectProps {
  [k: string]: InjectPropsValue;
}

declare interface RenderJson {
  [k: string]: InstanceInfo;
}
