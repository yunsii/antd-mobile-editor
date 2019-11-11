import React from 'react';
import { List, Icon } from 'antd-mobile';
import _get from 'lodash/get';
import _forOwn from 'lodash/forOwn';
import { CustomResult } from '@/components/DataLoading';
import { injectionMap, InjectField } from '@/utils/gaea';
import styles from './InjectFieldsView.less'

export interface LayoutPageProps {
  pageJson: { [k: string]: InstanceInfo };
}

function LayoutPage(props: LayoutPageProps) {
  const { pageJson = {} } = props;
  const injectFields: string[] = [];
  const allInjectFields = injectionMap.map(item => item.configKey);

  const noRenderJson = !pageJson;
  const isEmptyRenderJson = !Object.keys(pageJson).length;

  if (noRenderJson || isEmptyRenderJson) {
    let result: any;
    if (noRenderJson || isEmptyRenderJson) {
      result = <CustomResult key='noRenderJson' title={`pageJson ${noRenderJson ? '未配置' : '为空'}`} />;
    }
    return result;
  }


  _forOwn(pageJson, (value, key) => {
    const props = _get(value, 'data.props') || {};
    _forOwn(props, (propValue, propKey) => {
      if (allInjectFields.includes(propKey as InjectField) && propValue) {
        injectFields.push(propValue);
      }
    })
  });

  return (
    <List>
      {injectFields.map(item => {
        return (
          <List.Item
            key={item}
            className={styles.listItem}
          >
            {item}
          </List.Item>
        );
      })}
    </List>
  )
}

export default LayoutPage;