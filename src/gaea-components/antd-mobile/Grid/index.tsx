import { Grid } from 'antd-mobile';
import * as React from 'react';
import { DataLoading } from '@/components/DataLoading';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <div>
        <DataLoading loading={this.props.loading} data={this.props.data}>
          <Grid
            data={this.props.data}
            columnNum={this.props.columnNum}
            hasLine={this.props.hasLine}
            isCarousel={this.props.isCarousel}
            carouselMaxRow={this.props.carouselMaxRow}
            square={this.props.square}
            onClick={this.props.onClick}
          />
        </DataLoading>
      </div>
    );
  }
}
