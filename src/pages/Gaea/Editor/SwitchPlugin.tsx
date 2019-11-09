import React from 'react';
import { Connect } from 'dob-react';

export interface SwitchPluginProps {
  currentPage: string;
  onClick: () => void;
}

@Connect
export default class extends React.Component<SwitchPluginProps> {
  render() {
    const { currentPage, onClick } = this.props;
    return (
      <div onClick={onClick}>
        当前页面：{currentPage}
      </div>
    )
  }
}
