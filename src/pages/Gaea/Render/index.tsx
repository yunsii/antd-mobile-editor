import React, { useState } from 'react';
import classNames from 'classnames';
import Operations, { DimensionTypes } from './Operations';
import styles from './index.less';

export default () => {
  const [selected, setSelected] = useState<DimensionTypes>('iphone678');
  const [pagePath, setPagePath] = useState();

  const onSelect = (event: any) => { setSelected(event.target.value) };

  console.log(pagePath);
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <div className={classNames(styles.body)}>
          <Operations
            selectedDimension={selected}
            onDimensionSelect={onSelect}
            getCurrentPath={setPagePath}
          />
          <div className={classNames(styles.window, styles[selected])}>
            <iframe
              src={pagePath}
              style={{ width: '100%', height: 'calc(100% - 5px)', border: 'unset' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
