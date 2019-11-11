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
  images: [
    'https://avatars2.githubusercontent.com/u/18096089?s=400&u=ac70c17caf8cb7e48d0a4f8b8ef28825688cbb8d&v=4',
    'https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png',
  ],
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
  handleMenuClick: (item) => {
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

  console.log(pageProps);

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
