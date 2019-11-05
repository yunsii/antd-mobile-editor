import React from 'react';
import { SimpleCard } from '@/components/Container';
import { Paragraph } from '@/gaea-components/placeholder';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const { title, extra, children } = this.props;
    return (
      <SimpleCard
        title={title}
        extra={extra}
      >
        {Array.isArray(children) && !children.length ? <Paragraph /> : children}
      </SimpleCard>
    )
  }
}