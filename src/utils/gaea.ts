import _get from 'lodash/get';
import _set from 'lodash/set';
import _forOwn from 'lodash/forOwn';
import _cloneDeep from 'lodash/cloneDeep';
import _omitBy from 'lodash/omitBy';
import _isUndefined from 'lodash/isUndefined';

export function injectConfig(renderJson: Map<string, InstanceInfo>, config: any) {
  const result = _cloneDeep(renderJson);
  _forOwn(result, (value, key) => {
    const props = _get(value, 'data.props') || {};
    const { dataSource, handleClick, ...rest } = props;
    if (dataSource || handleClick) {
      const newProps = _omitBy({
        ...rest,
        data: config[dataSource],
        onClick: config[handleClick],
      }, _isUndefined)
      _set(value as any, 'data.props', newProps);
    }
  });
  console.log(result);
  return result;
}
