import React from 'react';
import ImagesCarousel from '@/components/ImagesCarousel';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const { images } = this.props;

    return (
      <ImagesCarousel 
        images={images}
      />
    )
  }
}
