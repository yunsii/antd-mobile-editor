import React, { useState } from 'react';
import classNames from 'classnames';
import CustomIcon from '@/components/CustomIcon';
import Operations, { DimensionTypes } from './Operations';
import InjectFieldsView from './InjectFieldsView';
import styles from './index.less';

export default () => {
  const [selected, setSelected] = useState<DimensionTypes>('iphone678');
  const [pagePath, setPagePath] = useState();
  const [pageJson, setPageJson] = useState();
  const [iframeKey, setIframeKey] = useState(1);

  const onSelect = (event: any) => { setSelected(event.target.value) };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <div className={classNames(styles.part, styles.partLeft)}>
          <InjectFieldsView pageJson={pageJson} />
        </div>
        <div className={classNames(styles.part, styles.partRight)}>
          <Operations
            selectedDimension={selected}
            onDimensionSelect={onSelect}
            getCurrentPathAndJson={(path, json) => {
              setPagePath(path);
              setPageJson(json);
            }}
          />
          <div className={classNames(styles.window, styles[selected])}>
            <iframe
              key={iframeKey}
              src={pagePath}
              style={{ width: '100%', height: 'calc(100% - 5px)', border: 'unset' }}
            />
            <div className={styles.toolBar}>
              <CustomIcon type='refresh' className={styles.refresh} onClick={() => setIframeKey(iframeKey + 1)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
