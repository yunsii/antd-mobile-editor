import React from 'react';
import ImagesCarousel from '@/components/ImagesCarousel';
import DataLoading from '@/components/DataLoading';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const { data, loading } = this.props;

    return (
      <DataLoading loading={loading} data={data}>
        <ImagesCarousel
          images={data}
        />
      </DataLoading>
    )
  }
}
