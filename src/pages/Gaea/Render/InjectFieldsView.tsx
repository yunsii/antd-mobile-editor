import React from 'react';
import { List, Icon } from 'antd-mobile';
import _get from 'lodash/get';
import _forOwn from 'lodash/forOwn';
import { CustomResult } from '@/components/DataLoading';
import { transferMap, InjectField } from '@/utils/gaea';
import styles from './InjectFieldsView.less'

export interface LayoutPageProps {
  renderJson: { [k: string]: InstanceInfo };
  injectProps: { [k: string]: any };
}

function LayoutPage(props: LayoutPageProps) {
  const { renderJson = {}, injectProps = {} } = props;
  const injectFields: string[] = [];
  const allInjectFields = transferMap.map(item => item.configKey);

  const noRenderJson = !renderJson;
  const isEmptyRenderJson = !Object.keys(renderJson).length;
  const noInjectProps = !injectProps;
  const isEmptyInjectProps = !Object.keys(injectProps).length;

  if (noRenderJson || isEmptyRenderJson || noInjectProps || isEmptyInjectProps) {
    let result: any[] = [];
    if (noRenderJson || isEmptyRenderJson) {
      result.push(<CustomResult key='noRenderJson' title={`renderJson ${noRenderJson ? '未配置' : '为空'}`} />);
    }
    if (noInjectProps || isEmptyInjectProps) {
      result.push(<CustomResult key='noInjectProps' title={`injectProps ${noInjectProps ? '未配置' : '为空'}`} />);
    }
    return result as any;
  }


  _forOwn(renderJson, (value, key) => {
    const props = _get(value, 'data.props') || {};
    _forOwn(props, (propValue, propKey) => {
      if (allInjectFields.includes(propKey as InjectField) && propValue) {
        injectFields.push(propValue);
      }
    })
  });

  const injectResult: { field: string, inject: boolean }[] = [];
  injectFields.forEach(field => {
    injectResult.push({
      field,
      inject: !!injectProps[field],
    });
  });

  return (
    <List>
      {injectResult.map(item => {
        return (
          <List.Item
            key={item.field}
            extra={<Icon color={item.inject ? '#108ee9' : '#f4333c'} type={item.inject ? 'check' : 'cross'} />}
            className={styles.listItem}
          >
            {item.field}
          </List.Item>
        );
      })}
    </List>
  )
}

export default LayoutPage;
