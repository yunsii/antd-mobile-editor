import React from 'react';
import InjectionRender from 'gaea-injection-render';
import { List, Switch, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { injectPropsToUI } from '@/utils/gaea';
import { componentClasses } from '@/gaea-components';
import renderJson from '@/renderJson';

const gender = [
  {
    label: '男',
    value: 'm',
  },
  {
    label: '女',
    value: 'w',
  },
]

const setFormItemsForPersonalInfo = (form) => {
  const { getFieldProps } = form;
  return [
    {
      label: '姓名',
      field: 'name',
      fieldProps: {
        rules: [
          {
            required: true, message: '请输入姓名',
          }
        ],
      },
    },
    {
      type: 'picker',
      label: '性别',
      field: 'gender',
      fieldProps: {
        rules: [
          {
            required: true, message: '请选择性别',
          }
        ],
      },
      componentProps: {
        data: gender,
      },
    },
    {
      type: 'custom',
      field: 'confirm',
      component: (
        <List.Item
          extra={<Switch {...getFieldProps('confirm', { initialValue: true, valuePropName: 'checked' })} />}
        >
          确认信息
        </List.Item>
      ),
    },
  ];
}

const setFormItemsForPersonalIntro = (form) => {
  const { getFieldProps } = form;
  return [
    {
      type: 'custom',
      field: 'confirm',
      component: (
        <TextareaItem
          {...getFieldProps('intro', {
            initialValue: '各位评委老师好，我是...',
          })}
          rows={5}
          count={100}
        />
      ),
    },
  ];
}

class FormDemo extends React.PureComponent {
  render() {
    const pageProps = {
      setFormItemsForPersonalInfo,
      onSubmitPersonalInfo: (fieldsValue) => {
        console.log('个人信息', fieldsValue);
      },
      setFormItemsForPersonalIntro,
      onSubmitPersonalInfo: (fieldsValue) => {
        console.log('个人简介', fieldsValue);
      },
    }
    return (
      <InjectionRender
        componentClasses={componentClasses}
        value={injectPropsToUI(renderJson.formDemo.json, pageProps)}
      />
    );
  }
}

export default FormDemo;
