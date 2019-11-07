import React from 'react';
import router from 'umi/router';
import Editor from 'gaea-editor';
// import BasicComponents from 'gaea-basic-components';
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { Descriptions } from '@/gaea-components/display';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';

export default () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
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
        onSave={(value) => {
          console.log(value);
          router.push({
            pathname: '/render',
            state: value,
          });
        }}
        defaultValue={localStorage.getItem('gaea-draft') ? JSON.parse(localStorage.getItem('gaea-draft') as string) : undefined}
      />
    </div>
  )
}
