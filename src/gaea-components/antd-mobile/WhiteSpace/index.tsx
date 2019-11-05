import * as React from 'react';
import { WhiteSpace } from 'antd-mobile';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <WhiteSpace
        size={this.props.size}
      />
    );
  }
}
