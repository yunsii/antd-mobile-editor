import React from 'react';
import styles from './index.less';

export type DimensionTypes = 'iphone678' | 'iphoneX' | 'ipad';

const dimensionMap: { [k in DimensionTypes]: string } = {
  iphone678: '375 x 667',
  iphoneX: '375 x 812',
  ipad: '768 x 1024',
}

interface Props {
  selected: string;
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default (props: Props) => {
  const { selected, onSelect } = props;
  return (
    <div className={styles.operations}>
      <select className={styles.select} value={selected} onChange={onSelect}>
        <option value="iphone678">Iphone6/7/8</option>
        <option value="iphoneX">IphoneX</option>
        <option value="ipad">Ipad</option>
      </select>
      <p className={styles.displayDimension}>
        {dimensionMap[selected]}
      </p>
    </div>
  );
}
