import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const { title, backable, backPath, children } = this.props;
    return (
      <PageWrapper
        title={title}
        backable={backable}
        backPath={backPath}
      >
        {children}
      </PageWrapper>
    )
  }
}
