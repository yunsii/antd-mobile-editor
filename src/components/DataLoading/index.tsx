import React, { useState, useEffect } from 'react';
import { Result } from 'antd-mobile';
import _repeat from 'lodash/repeat';

const Loading: React.FC<{}> = () => {
  const [dotNums, setDotNums] = useState(0);
  const dots = 3;

  useEffect(() => {
    const setDotNumsInterval = setInterval(() => {
      setDotNums(dotNums + 1);
    }, 333);

    return () => { clearInterval(setDotNumsInterval); }
  }, [dotNums]);

  return (
    <p>
      {`加载中${_repeat('.', dotNums % (dots + 1))}`}
      <span style={{ color: 'transparent' }}>{`${_repeat('.', (dots + 1) - (dotNums % (dots + 1)))}`}</span>
    </p>
  )
}

export interface AsyncRenderProps<T = any> extends React.PropsWithoutRef<React.Props<T>> {
  loading: boolean;
  data: T | T[];
  children: any;
}

export function DataLoading<T>({ loading, data, children }: AsyncRenderProps<T>): React.ReactElement {
  if (loading) {
    return <Result message={<Loading />} />;
  }
  if ((Array.isArray(data) && !data.length) || !Object.keys(data).length) {
    return <Result message='暂无数据' />;
  }
  return children;
}

export default DataLoading;
