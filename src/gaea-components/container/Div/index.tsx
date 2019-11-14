import * as React from 'react';
import { Props, State } from './type';

export default class Container extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const { style, children } = this.props;
    const minHeightStyle = {
      minHeight: Array.isArray(children) && children.length ? 'unset' : style.minHeight
    }
    return (
      <div style={{ backgroundColor: '#f5f5f9', ...minHeightStyle, ...style, }}>
        {children}
      </div>
    );
  }
}
