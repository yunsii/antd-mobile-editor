import React, { useState } from 'react';
import Editor from 'gaea-editor';
import { List, InputItem } from 'antd-mobile';
import {
  saveRenderJson,
} from '@/services/gaea';
// import BasicComponents from 'gaea-basic-components';
import { PopupModal } from '@/components/antd-mobile/Modal'
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { Descriptions } from '@/gaea-components/display';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';
import { GetJsonModal, MessageModal } from '@/components/gaea';
import { RenderJson } from '@/defines/inject';
import SwitchPlugin from './SwitchPlugin';

export default () => {
  const [saveVisible, setSaveVisible] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [renderJson, setRenderJson] = useState<RenderJson>({});
  const [pickerVisible, setPickerVisible] = useState<boolean>(true);

  const [messageVisible, setMessageVisible] = useState(false);
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  const handleSave = async () => {
    const response = await saveRenderJson(saveName, renderJson);
    if (response['data']) { setSaveVisible(false) }
    setTitle(response['data'] ? '成功' : '失败');
    setMessage(response['data'] ? `保存到：${response['data']}` : response['message']);
    setMessageVisible(true);
  }

  const plugins = [
    {
      position: 'navbarRight',
      class: () => (
        <SwitchPlugin
          currentPage={saveName}
          onClick={() => {
            setRenderJson({});
            setPickerVisible(true);
          }}
        />
      ),
    },
  ]

  console.log(renderJson)
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {Object.keys(renderJson).length ? (
        <Editor
          plugins={plugins}
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
      <GetJsonModal
        pickerVisible={pickerVisible}
        onClose={() => {setPickerVisible(false)}}
        preSelectJsonName={saveName}
        getJson={(fileName, json) => {
          setSaveName(fileName);
          setRenderJson(json);
        }}
      />
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
      <MessageModal
        visible={messageVisible}
        onClose={() => setMessageVisible(false)}
        title={title}
        message={message}
      />
    </div>
  )
}
