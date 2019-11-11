import React, { useEffect, useState } from 'react';
import InjectionRender from 'gaea-injection-render';
import CustomIcon from '@/components/CustomIcon';
import { SlideUpModal } from '@/components/antd-mobile/Modal';
import { injectPropsToUI } from '@/utils/gaea';
import { InjectProps } from '@/defines/inject';
import { componentClasses } from '@/gaea-components';
import renderJson from '@/renderJson';

const pageConfig: InjectProps = {
  menuData: [
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
  handleMenuClick: (item) => {
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

export interface GaeaPageProps { }

function GaeaPage(props: GaeaPageProps) {
  const [pageProps, setPageProps] = useState({});
  const [visible, setVisible] = useState(false);

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
      <InjectionRender
        componentClasses={componentClasses}
        value={injectPropsToUI(renderJson.demo2.json, pageProps)}
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
