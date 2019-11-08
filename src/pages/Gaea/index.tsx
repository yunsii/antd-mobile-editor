import React from 'react';
import router from 'umi/router';
import classNames from 'classnames';
import styles from './index.less';

interface Props {
  selectedDimension: string;
  onDimensionSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  getCurrentComponent: (component: JSX.Element) => void;
}

export default (props: Props) => {
  const handleClick = (path) => {
    router.push(path);
  }

  return (
    <div className={styles.container}>
      <div className={classNames(styles.part, styles.partLeft)} onClick={() => handleClick('/gaea/editor')}>
        UI 设计
      </div>
      <div className={classNames(styles.part, styles.partRight)} onClick={() => handleClick('/gaea/render')}>
        业务逻辑
      </div>
    </div>
  );
}
