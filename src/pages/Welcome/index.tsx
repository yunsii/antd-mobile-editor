import React from 'react';
import Editor from 'gaea-editor';
// import BasicComponents from 'gaea-basic-components';
import { Div, SimpleCard } from '@/gaea-components/container';
import { ImagesCarousel } from '@/gaea-components/data-container';
import { WhiteSpace, Button, Grid } from '@/gaea-components/antd-mobile';

export default function Welcome() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Editor
        componentClasses={[
          Button,
          Div,
          Grid,
          ImagesCarousel,
          SimpleCard,
          WhiteSpace,
        ]}
        onSave={(value) => {
          console.log(value);
        }}
      />
    </div>
  )
}
