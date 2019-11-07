import React, { useState } from 'react';
import classNames from 'classnames';
import withRouter from 'umi/withRouter';
import { Location } from 'history';
import Operations, { DimensionTypes } from './Operations';
import InjectFieldsView from './InjectFieldsView';
import GaeaPage from '@/pages/Demo/GaeaPage';
import styles from './index.less';

export interface RenderPageProps {
  location: Location;
}

function RenderPage(props: RenderPageProps) {
  // const { location } = props;
  const [selected, setSelected] = useState<DimensionTypes>('iphone678');
  const [pageProps, setPageProps] = useState({});
  const [renderJson, setRenderJson] = useState<{ [k: string]: InstanceInfo }>({});

  // const renderJson: { [k: string]: InstanceInfo } = location.state;
  // localStorage.setItem('gaea-draft', JSON.stringify(renderJson));

  const onSelect = (event: any) => { setSelected(event.target.value) };

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <div className={classNames(styles.part, styles.partLeft)}>
          <InjectFieldsView renderJson={renderJson} injectProps={pageProps} />
        </div>
        <div className={classNames(styles.part, styles.partRight)}>
          <Operations selected={selected} onSelect={onSelect} />
          <div className={classNames(styles.window, styles[selected])}>
            <GaeaPage
              getData={(json, pageProps) => {
                setRenderJson(json);
                setPageProps(pageProps);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(RenderPage)
