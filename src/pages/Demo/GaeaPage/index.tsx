import React, { useEffect, useState } from 'react';
import GaeaInjectionRender from 'gaea-injection-render';
import CustomIcon from '@/components/CustomIcon';
import { SlideUpModal } from '@/components/antd-mobile/Modal';
import { injectPropsToUI } from '@/utils/gaea';
import { InjectProps } from '@/defines/inject';
import renderJson from '@/assets/gaea-json/gaeaPage.json';
import { componentClasses } from '@/gaea-components';

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
    {
      label: '产地',
      value: '重庆',
    },
  ]
}

export interface GaeaPageProps {
  getData?: (renderJson: { [k: string]: InstanceInfo }, pageProps: any) => void;
}

function GaeaPage(props: GaeaPageProps) {
  const { getData = () => { } } = props;
  const [pageProps, setPageProps] = useState({});
  const [visible, setVisible] = useState(false);

  getData(renderJson, pageProps);

  useEffect(() => {
    setTimeout(() => {
      setPageProps({
        ...pageConfig,
        handleOpenModal: () => {
          setVisible(true);
        }
      });
    }, 1800);
  }, []);

  return (
    <>
      <GaeaInjectionRender
        componentClasses={componentClasses}
        value={injectPropsToUI(renderJson, pageProps)}
      />
      <SlideUpModal
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>
          Hello, world.
        </p>
      </SlideUpModal>
    </>
  )
}

export default GaeaPage
