import React from 'react';
import Editor from 'gaea-editor';
// import BasicComponents from 'gaea-basic-components';
import { Div } from '@/components/Container';
import { WhiteSpace, Button, Grid } from '@/components/AntdMobile';

export default function Welcome() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Editor
        componentClasses={[Div, WhiteSpace, Button, Grid]}
        onSave={(value) => {
          console.log(value);
        }}
      />
    </div>
  )
}
