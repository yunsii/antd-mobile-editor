import * as React from 'react';
import Description from '@/components/Description';
import { Props, State } from './type';

export default class extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    const { data, labelAlign, valueAlign, labelFlex, valueFlex } = this.props;
    return (
      <div>
        {data.map(item => (
          <Description
            key={item.label}
            label={item.label}
            align={[labelAlign, valueAlign]}
            flex={[labelFlex, valueFlex]}
          >
            {item.value}
          </Description>
        ))}
      </div>
    );
  }
}
