import { DescriptionsData } from "@/gaea-components/display/Descriptions/type";
import { GirdData } from "@/gaea-components/antd-mobile/Grid/type";
import { ImagesCarouselData } from "@/gaea-components/data-container/ImagesCarousel/type";

declare type InjectPropsValue =
  DescriptionsData |
  GirdData |
  ImagesCarouselData |
  boolean |  // loading and etc
  Function   // event callback

declare interface InjectProps {
  [k: string]: InjectPropsValue;
}

declare interface RenderJson {
  [k: string]: InstanceInfo;
}
