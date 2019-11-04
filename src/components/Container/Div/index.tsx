import * as React from 'react';
import { Props, State } from './type';

export default class Container extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return <div style={this.props.style}>{this.props.children}</div>;
  }
}
