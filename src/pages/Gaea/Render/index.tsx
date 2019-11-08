import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Operations, { DimensionTypes } from './Operations';
import InjectFieldsView from './InjectFieldsView';
import styles from './index.less';

import { RenderJson, InjectProps } from '@/defines/inject';

export default () => {
  const [selected, setSelected] = useState<DimensionTypes>('iphone678');
  const [pageProps, setPageProps] = useState({});
  const [renderJson, setRenderJson] = useState<{ [k: string]: InstanceInfo }>({});

  const [pageComponent, setPageComponent] = useState();

  useEffect(() => {
    setRenderJson({});
    setPageProps({});
  }, [pageComponent])

  const onSelect = (event: any) => { setSelected(event.target.value) };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <div className={classNames(styles.part, styles.partLeft)}>
          <InjectFieldsView renderJson={renderJson} injectProps={pageProps} />
        </div>
        <div className={classNames(styles.part, styles.partRight)}>
          <Operations
            selectedDimension={selected}
            onDimensionSelect={onSelect}
            getCurrentComponent={setPageComponent}
          />
          <div className={classNames(styles.window, styles[selected])}>
            {pageComponent ? React.cloneElement(pageComponent, {
              getData: (json: RenderJson, pageProps: InjectProps) => {
                setRenderJson(json);
                setPageProps(pageProps);
              }
            }) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
