// @flow 
import * as React from 'react';
import styles from './index.less';

type Props = {
  type: string;
  style?: React.CSSProperties;
};
const CustomIcon = (props: Props) => {
  const { type, ...rest } = props;
  return (
    <svg className={styles.icon} aria-hidden="true" {...rest}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};

export default CustomIcon;
