import React, { useState } from 'react';
import classNames from 'classnames';
import withRouter from 'umi/withRouter';
import { Location } from 'history';
import Render from 'gaea-render';
// import BasicComponents from 'gaea-basic-components';
import CustomIcon from '@/components/CustomIcon';
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { Descriptions } from '@/gaea-components/display';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';
import { injectConfig } from '@/utils/gaea';
import styles from './index.less';

const pageConfig = {
  menus: [
    {
      text: '菜单一',
      icon: <CustomIcon type='empty' />,
    },
    {
      text: '菜单二',
      icon: <CustomIcon type='empty' />,
    },
  ],
  menusLoading: true,
  handleMenusClick: (item) => {
    console.log(item);
  }
}

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
  const renderJson: { [k: string]: InstanceInfo } = location.state;

  localStorage.setItem('gaea-draft', JSON.stringify(renderJson));

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
          value={injectConfig(renderJson, pageConfig)}
        />
      </div>
    </div>
  )
}

export default withRouter(RenderPage)
