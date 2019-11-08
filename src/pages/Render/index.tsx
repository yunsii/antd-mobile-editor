import React, { useState } from 'react';
import { PickerView } from 'antd-mobile';
import classNames from 'classnames';
import withRouter from 'umi/withRouter';
import { Location } from 'history';
import { PopupModal } from '@/components/antd-mobile/Modal';
import Operations, { DimensionTypes } from './Operations';
import InjectFieldsView from './InjectFieldsView';
import styles from './index.less';

import GaeaPage from '@/pages/Demo/GaeaPage';
import { RenderJson, InjectProps } from '@/defines/inject';

const pagesData = [
  {
    name: 'GaeaPage',
    component: <GaeaPage />,
  },
]

function getTargetComponent(name) {
  const target = pagesData.find(item => item.name === name);
  if (target) {
    return target.component;
  }
  return null;
}

export interface RenderPageProps {
  location: Location;
}

function RenderPage(props: RenderPageProps) {
  const [selected, setSelected] = useState<DimensionTypes>('iphone678');
  const [pageProps, setPageProps] = useState({});
  const [renderJson, setRenderJson] = useState<{ [k: string]: InstanceInfo }>({});

  const [selectPage, setSelectPage] = useState(pagesData[0].name);
  const [pickerVisible, setPickerVisible] = useState(!selectPage);
  const [pageComponent, setPageComponent] = useState(getTargetComponent(selectPage));

  const onSelect = (event: any) => { setSelected(event.target.value) };

  const handleSelectPage = () => {
    const target = getTargetComponent(selectPage);
    if (target) {
      setPickerVisible(false);
      setPageComponent(target);
    }
  }

  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
        <div className={classNames(styles.part, styles.partLeft)}>
          <InjectFieldsView renderJson={renderJson} injectProps={pageProps} />
        </div>
        <div className={classNames(styles.part, styles.partRight)}>
          <Operations selected={selected} onSelect={onSelect} />
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
      <PopupModal
        visible={pickerVisible}
        title='选择页面'
        onClose={() => setPickerVisible(false)}
        footer={[
          {
            text: '确定',
            onPress: handleSelectPage,
          }
        ]}
      >
        <PickerView
          data={pagesData.map(item => ({ label: item.name, value: item.name }))}
          cascade={false}
          value={[selectPage]}
          onChange={setSelectPage}
        />
      </PopupModal>
    </div>
  )
}

export default withRouter(RenderPage)
