import React, { useState } from 'react';
import classNames from 'classnames';
import withRouter from 'umi/withRouter';
import { Location } from 'history';
import Render from 'gaea-render';
// import BasicComponents from 'gaea-basic-components';
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { Descriptions } from '@/gaea-components/display';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';
import styles from './index.less';

const dimensionMap = {
  iphone678: '375 x 667',
  iphoneX: '375 x 812',
  ipad: '768 x 1024',
}

export interface RenderPageProps {
  location: Location;
}

function RenderPage(props: RenderPageProps) {
  const { location } = props;
  const [selected, setSelected] = useState('iphone678');

  const onSelect = (event: any) => {
    setSelected(event.target.value);
  };

  return (
    <div className={styles.container}>
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
      <div className={classNames(styles.window, styles[selected])}>
        <Render
          componentClasses={[
            Button,
            Descriptions,
            Div,
            Grid,
            ImagesCarousel,
            SimpleCard,
            WhiteSpace,
          ]}
          value={location.state}
        />
      </div>
    </div>
  )
}

export default withRouter(RenderPage)
