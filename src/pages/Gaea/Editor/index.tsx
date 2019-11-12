import React, { useState } from 'react';
import Editor from 'gaea-injection-editor';
import { List, InputItem, Modal } from 'antd-mobile';
import {
  saveRenderJson,
  deleteRenderJson,
} from '@/services/gaea';
// import BasicComponents from 'gaea-basic-components';
import { PopupModal } from '@/components/antd-mobile/Modal'
import { GetJsonModal, MessageModal } from '@/components/gaea';
import { RenderJson } from '@/defines/inject';
import ButtonPlugin from './ButtonPlugin';
import SwitchPlugin from './SwitchPlugin';
import { componentClasses } from '@/gaea-components';

type PageMode = 'edit' | 'create' | 'save' | 'delete';

const pageModeFooterTextMap: { [k in PageMode]: string } = {
  edit: '确定',
  create: '继续',
  save: '确定',
  delete: '继续',
}

export default () => {
  const [saveVisible, setSaveVisible] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [renderJson, setRenderJson] = useState<RenderJson>();
  const [pickerVisible, setPickerVisible] = useState<boolean>(true);
  const [pageMode, setPageMode] = useState<PageMode>('edit');

  const [messageVisible, setMessageVisible] = useState(false);
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  const handleSave = async () => {
    const response = await saveRenderJson(saveName, renderJson || {});
    if (response['data']) { setSaveVisible(false) }

    setTitle(response['data'] ? '成功' : '失败');
    setMessage(response['data'] ? `保存到：${response['data']}` : response['message']);
    setMessageVisible(true);
  }

  const handleDelete = async () => {
    const response = await deleteRenderJson(saveName);
    if (response['data']) { setSaveVisible(false) }

    setTitle(response['data'] ? '成功' : '失败');
    setMessage(response['data'] ? `已删除：${response['data']}` : response['message']);
    setRenderJson(undefined);
    setMessageVisible(true);
  }

  const plugins = [
    {
      position: 'navbarRight',
      class: () => (
        <ButtonPlugin
          onClick={() => {
            const modal = Modal.alert(
              '删除 UI',
              `确定删除 ${saveName} 吗？`,
              [
                {
                  text: '确定',
                  onPress: () => {
                    modal.close();
                    setPageMode('delete');
                    handleDelete();
                  },
                },
                {
                  text: '取消',
                  onPress: () => { modal.close() },
                },
              ]
            )
          }}
        >
          删除
        </ButtonPlugin>
      ),
    },
    {
      position: 'navbarRight',
      class: () => (
        <SwitchPlugin
          currentPage={saveName}
          onClick={() => {
            setRenderJson(undefined);
            setPickerVisible(true);
          }}
        />
      ),
    },
    {
      position: 'navbarRight',
      class: () => (
        <ButtonPlugin
          onClick={() => {
            setRenderJson(undefined);
            setSaveName('');
            setSaveVisible(true);
            setPageMode('create');
          }}
        >
          新建
        </ButtonPlugin>
      ),
    },
  ]

  return (
    <div className='format-gaea-render' style={{ width: '100vw', height: '100vh' }}>
      {renderJson ? (
        <Editor
          plugins={plugins}
          componentClasses={componentClasses}
          onSave={async (value) => {
            console.log(value);
            setSaveVisible(true);
            setPageMode('save');
            setRenderJson(value);
          }}
          defaultValue={Object.keys(renderJson).length ? renderJson : undefined}
          layout={{
            showDragMenu: true,
            defaultViewMode: 'Iphone6/7/8',
          }}
        />
      ) : null}
      <GetJsonModal
        pickerVisible={pickerVisible}
        onClose={() => { setPickerVisible(false) }}
        preSelectJsonName={saveName}
        getJson={(fileName, json) => {
          setSaveName(fileName);
          setRenderJson(json);
        }}
      />
      <PopupModal
        visible={saveVisible}
        title='保存'
        onClose={() => {
          setSaveVisible(false);
          setPageMode('edit');
        }}
        style={{ width: 'auto' }}
        footer={[
          {
            text: '确定',
            onPress: handleSave,
          }
        ]}
      >
        <List>
          <InputItem value={saveName} onChange={setSaveName} placeholder='请输入'>文件名称</InputItem>
        </List>
      </PopupModal>
      <MessageModal
        visible={messageVisible}
        onClose={() => setMessageVisible(false)}
        title={title}
        message={message}
        footer={[
          {
            text: pageModeFooterTextMap[pageMode],
            onPress: () => {
              if (pageModeFooterTextMap[pageMode] === '继续') {
                setPickerVisible(true);
              }
              setMessageVisible(false);
            }
          }
        ]}
      />
    </div>
  )
}
