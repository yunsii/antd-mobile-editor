import React, { useEffect, useState } from 'react';
import Render from 'gaea-render';
import { ActivityIndicator } from 'antd-mobile';
import CustomIcon from '@/components/CustomIcon';
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { Descriptions } from '@/gaea-components/display';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';
import { injectPropsToUI } from '@/utils/gaea';
import { InjectProps } from '@/defines/inject';
import renderJson from '@/assets/gaea-json/gaeaPage.json';

const pageConfig: InjectProps = {
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
  // menusLoading: true,
  handleMenusClick: (item) => {
    console.log(item);
  },
  商品信息: [
    {
      label: '名称',
      value: '一个商品',
    },
    {
      label: '价格',
      value: '11.11',
    },
  ]
}

export interface GaeaPageProps {
  getData?: (renderJson: { [k: string]: InstanceInfo }, pageProps: any) => void;
}

function GaeaPage(props: GaeaPageProps) {
  const { getData = () => { } } = props;
  const [pageProps, setPageProps] = useState();
  const [renderRef, setRenderRef] = useState();

  getData(renderJson, pageConfig);

  useEffect(() => {
    setTimeout(() => {
      setPageProps(pageConfig);
    }, 2000)
  }, []);

  // useEffect(() => {
  //   if (renderRef) {
  //     console.log('call forceUpdate');
  //     renderRef.forceUpdate();
  //   }
  // }, [pageProps, renderRef])


  if (!pageProps) {
    return <ActivityIndicator toast animating />
  }

  return (
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
      value={injectPropsToUI(renderJson, pageProps)}
      ref={ref => {
        setRenderRef(ref);
      }}
    />
  )
}

export default GaeaPage
