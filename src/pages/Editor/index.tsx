import React, { useState, useEffect } from 'react';
import Editor from 'gaea-editor';
import { PickerView, List, InputItem } from 'antd-mobile';
import {
  saveRenderJson,
  getRenderJsons,
  getRenderJson
} from '@/services/gaea';
// import BasicComponents from 'gaea-basic-components';
import { PopupModal } from '@/components/CustomAntdMobile/Modal'
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { Descriptions } from '@/gaea-components/display';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';
import { RenderJson } from '@/defines/inject';

export default () => {
  const [allJson, setAllJson] = useState<string[]>([]);
  const [pickerVisible, setPickerVisible] = useState(true);
  const [messageVisible, setMessageVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [selectJsonName, setSelectJsonName] = useState<string[]>([]);
  const [renderJson, setRenderJson] = useState<RenderJson>({})
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    const getJsons = async () => {
      const response = await getRenderJsons();
      if (response['data'] && response['data'].length) {
        setAllJson(response['data']);
        setSelectJsonName([response['data'][0]]);
      } else {
        setTitle('失败');
        setMessage(response['message']);
        setMessageVisible(true);
      }
    }
    getJsons();
  }, []);

  const handleGetJson = async () => {
    setSaveName(selectJsonName[0]);
    const response = await getRenderJson(selectJsonName[0]);
    if (response['data']) {
      setRenderJson(response['data']);
      setPickerVisible(false);
    } else {
      setTitle('失败');
      setMessage(response['message']);
      setMessageVisible(true);
    }
  }

  const handleSave = async () => {
    const response = await saveRenderJson(saveName, renderJson);
    if (response['data']) { setSaveVisible(false) }
    setTitle(response['data'] ? '成功' : '失败');
    setMessage(response['data'] ? `保存到：${response['data']}` : response['message']);
    setMessageVisible(true);
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {Object.keys(renderJson).length ? (
        <Editor
          componentClasses={[
            Button,
            Descriptions,
            Div,
            Grid,
            ImagesCarousel,
            SimpleCard,
            WhiteSpace,
          ]}
          onSave={async (value) => {
            console.log(value);
            setSaveVisible(true);
            setRenderJson(value);
          }}
          defaultValue={renderJson}
        />
      ) : null}
      <PopupModal
        visible={pickerVisible}
        title='选择页面'
        onClose={() => setPickerVisible(false)}
        footer={[
          {
            text: '确定',
            onPress: handleGetJson,
          }
        ]}
      >
        <PickerView
          data={allJson.map(item => ({ label: item, value: item }))}
          cascade={false}
          value={selectJsonName}
          onChange={setSelectJsonName}
        />
      </PopupModal>
      <PopupModal
        visible={saveVisible}
        title='保存'
        onClose={() => setSaveVisible(false)}
        style={{ width: 'auto' }}
        footer={[
          {
            text: '确定',
            onPress: handleSave,
          }
        ]}
      >
        <List>
          <InputItem value={saveName} onChange={setSaveName}>文件名称</InputItem>
        </List>
      </PopupModal>
      <PopupModal
        visible={messageVisible}
        title={title}
        onClose={() => setMessageVisible(false)}
        style={{ width: 'auto' }}
      >
        <p style={{ whiteSpace: 'nowrap' }}>
          {message}
        </p>
      </PopupModal>
    </div>
  )
}
