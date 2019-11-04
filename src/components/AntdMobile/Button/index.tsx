import { Button as AntButton } from 'antd-mobile';
import * as React from 'react';
import { Props, State } from './type';

export default class Button extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <AntButton
        className={this.props.className}
        inline={this.props.inline}
        icon={this.props.icon || undefined}
        activeClassName={this.props.activeClassName}
        activeStyle={this.props.activeStyle}
        style={this.props.style}
        type={this.props.type}
        size={this.props.size as any}
        loading={this.props.loading}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </AntButton >
    );
  }
}
