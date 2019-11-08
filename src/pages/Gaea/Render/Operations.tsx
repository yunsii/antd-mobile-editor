import React, { useEffect, useState } from 'react';
import styles from './Operations.less';
import GaeaPage from '@/pages/Demo/GaeaPage';
import Form from '@/pages/Demo/Form';

const pagesData = [
  {
    name: 'GaeaPage',
    component: <GaeaPage />,
  },
  {
    name: 'Form',
    component: <Form />,
  },
]

function getTargetComponent(name) {
  const target = pagesData.find(item => item.name === name);
  if (target) {
    return target.component;
  }
  return null;
}

export type DimensionTypes = 'iphone678' | 'iphoneX' | 'ipad';

const dimensionMap: { [k in DimensionTypes]: string } = {
  iphone678: '375 x 667',
  iphoneX: '375 x 812',
  ipad: '768 x 1024',
}

interface Props {
  selectedDimension: string;
  onDimensionSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  getCurrentComponent: (component: JSX.Element) => void;
}

export default (props: Props) => {
  const { selectedDimension, onDimensionSelect, getCurrentComponent } = props;
  const [defaultRenderPage, setDefaultRenderPage] = useState();

  useEffect(() => {
    if (localStorage.getItem('defaultRenderPage')) {
      setDefaultRenderPage(localStorage.getItem('defaultRenderPage'));
      const target = getTargetComponent(localStorage.getItem('defaultRenderPage'));
      if (target) {
        getCurrentComponent(target);
      }
    }
  }, [])

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
          setDefaultRenderPage(event.target.value);
          localStorage.setItem('defaultRenderPage', event.target.value);
          const target = getTargetComponent(event.target.value);
          if (target) {
            getCurrentComponent(target);
          }
        }}
      >
        {pagesData.map(item => {
          return <option key={item.name} value={item.name}>{item.name}</option>;
        })}
      </select>
    </div>
  );
}
