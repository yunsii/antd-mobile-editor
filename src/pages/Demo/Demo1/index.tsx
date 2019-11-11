import React, { useEffect, useState } from 'react';
import InjectionRender from 'gaea-injection-render';
import { ActivityIndicator } from 'antd-mobile';
import useSWR from 'swr';
import { getProjectInfo } from '@/services/demo';
import CustomIcon from '@/components/CustomIcon';
import { SlideUpModal } from '@/components/antd-mobile/Modal';
import { injectPropsToUI } from '@/utils/gaea';
import { InjectProps } from '@/defines/inject';
import { componentClasses } from '@/gaea-components';
import renderJson from '@/renderJson';

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
  handleMenusClick: (item) => {
    console.log(item);
  },
}

export interface GaeaPageProps { }

function GaeaPage(props: GaeaPageProps) {
  const [pageProps, setPageProps] = useState({});
  const [visible, setVisible] = useState(false);

  const { data, error } = useSWR('12', getProjectInfo);

  useEffect(() => {
    if (data) {
      setPageProps({
        ...pageConfig,
        handleOpenModal: () => {
          setVisible(true);
        },
        项目信息: data.data,
      });
    }
  }, [data]);

  return (
    <>
      <InjectionRender
        componentClasses={componentClasses}
        value={injectPropsToUI(renderJson.demo1.json, pageProps)}
      />
      <SlideUpModal
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>
          Hello, world.
        </p>
      </SlideUpModal>
      <ActivityIndicator toast animating={!data} />
    </>
  )
}

export default GaeaPage
