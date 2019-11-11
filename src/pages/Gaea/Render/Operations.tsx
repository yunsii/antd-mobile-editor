import React, { useEffect, useState } from 'react';
import _get from 'lodash/get';
import _upperFirst from 'lodash/upperFirst';
import renderJson from '@/renderJson';
import styles from './Operations.less';

function getTargetData(path: string) {
  let result = {};
  Object.keys(renderJson).forEach(item => {
    if (renderJson[item].path === path) {
      result = {
        name: item,
        path: path,
        json: renderJson[item].json,
      }
    }
  })
  return result;
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
  getCurrentPathAndJson: (path: string, json: any) => void;
}

export default (props: Props) => {
  const { selectedDimension, onDimensionSelect, getCurrentPathAndJson = () => { } } = props;
  const [defaultRenderPath, setDefaultRenderPage] = useState();

  useEffect(() => {
    const path = localStorage.getItem('defaultRenderPath') || renderJson[Object.keys(renderJson)[0]].path;
    setDefaultRenderPage(path);
    getCurrentPathAndJson(path, _get(getTargetData(path), 'json') || {});
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
        value={defaultRenderPath}
        onChange={(event) => {
          setDefaultRenderPage(event.target.value);
          localStorage.setItem('defaultRenderPath', event.target.value);
          getCurrentPathAndJson(event.target.value, _get(getTargetData(event.target.value), 'json') || {});
        }}
      >
        {Object.keys(renderJson).map(item => {
          return <option key={item} value={renderJson[item].path}>{_upperFirst(item)}</option>;
        })}
      </select>
    </div>
  );
}
