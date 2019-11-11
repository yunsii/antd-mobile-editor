import React from 'react';
import { Connect } from 'dob-react';

export interface ButtonPluginProps {
  onClick: () => void;
}

@Connect
export default class extends React.Component<React.PropsWithChildren<ButtonPluginProps>> {
  render() {
    const { onClick, children } = this.props;
    return (
      <div onClick={onClick}>
        {children}
      </div>
    )
  }
}
