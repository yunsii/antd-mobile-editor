import React, { useEffect, useState } from 'react';
import Link from 'umi/link';
import styles from './Operations.less';

const pagesData = [
  {
    name: 'GaeaPage',
    path: '/demo/gaea-page',
  },
]

export type DimensionTypes = 'iphone678' | 'iphoneX' | 'ipad';

const dimensionMap: { [k in DimensionTypes]: string } = {
  iphone678: '375 x 667',
  iphoneX: '375 x 812',
  ipad: '768 x 1024',
}

interface Props {
  selectedDimension: string;
  onDimensionSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  getCurrentPath: (path: string) => void;
}

export default (props: Props) => {
  const { selectedDimension, onDimensionSelect, getCurrentPath = () => { } } = props;
  const [defaultRenderPage, setDefaultRenderPage] = useState();


  useEffect(() => {
    const path = localStorage.getItem('defaultRenderPage') || pagesData[0].path;
    setDefaultRenderPage(path);
    getCurrentPath(path);
  }, [])

  console.log(defaultRenderPage);

  return (
    <div className={styles.operations}>
      <select className={styles.select} value={selectedDimension} onChange={onDimensionSelect}>
        <option value="iphone678">Iphone6/7/8</option>
        <option value="iphoneX">IphoneX</option>
        <option value="ipad">Ipad</option>
      </select>
      <p className={styles.displayDimension}>
        {dimensionMap[selectedDimension]}
      </p>
      <select
        className={styles.select}
        value={defaultRenderPage}
        onChange={(event) => {
          console.log(event.target.value);
          setDefaultRenderPage(event.target.value);
          localStorage.setItem('defaultRenderPage', event.target.value);
          getCurrentPath(event.target.value);
        }}
      >
        {pagesData.map(item => {
          return <option key={item.name} value={item.path}>{item.name}</option>;
        })}
      </select>
      <Link to={defaultRenderPage || '/'}>GO</Link>
    </div>
  );
}
