import React from 'react';
import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { formatMessage } from 'umi-plugin-react/locale';

export interface BasicLayoutProps {
  location: Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location } = props;

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(BasicLayout as any);
