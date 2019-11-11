<h1 align="center">antd-mobile-editor</h1>

<div align="center">

[gaea-editor](https://github.com/ascoders/gaea-editor) for ant design mobile

</div>


![editor.png](https://i.loli.net/2019/11/11/Zrus9S1CXz73UA2.png)

<p align="center">UI 设计页面</p>

![render.png](https://i.loli.net/2019/11/11/lBiK4zhIHwgn9JE.png)

<p align="center">业务逻辑页面</p>

## 使用说明

* [gaea-injection-editor](https://github.com/theprimone/gaea-injection-editor)
* [gaea-injection-render](https://github.com/theprimone/gaea-injection-render)

基于 [gaea-editor](https://github.com/ascoders/gaea-editor) 和 [gaea-render](https://github.com/ascoders/gaea-render) 改造为通过属性注入的方式实现 UI 设计和业务逻辑的开发。

### UI 设计

根据 [gaea-editor](https://github.com/ascoders/gaea-editor#add-custom-component-to-the-drag-menu) 说明开发组件。本项目组织方式为在 `/components` 开发原始组件，在 `/gaea-components` 下配置对应组件在编辑器中可配置的相关属性。

### 业务逻辑

根据保存导出的 `json` 对象渲染页面。

#### 注入数据和回调事件

[`injectPropsToUI(renderJson, config)`](/src/utils/gaea.ts#L27)

当前注入属性映射为：

* dataSource => data
* dataLoading => loading
* handleClick => onClick

可通过配置 [`injectionMap`](/src/utils/gaea.ts#L12) 扩展可注入的数据和回调事件。

#### 举例说明

在 `gaea-components` 中的 [`Gird`](/src/gaea-components/antd-mobile/Grid/type.ts) 组件添加可配置属性：

```ts
import { addInjectToEditor } from '@/utils/gaea';

public editSetting = {
  key: 'grid',
  name: 'Grid',
  editors: [
    addInjectToEditor(),  // 添加所以可注入属性配置
    // ...
  ],
};
```

在编辑器中将 `dataSource` 配置为 `'menus'`，将 `handleClick` 配置为 `'onMenusClick'`。

页面渲染时调用 `injectPropsToUI(renderJson, config)` 将注入数据和回调事件，如下将 `pageConfig` 注入到 `renderJson` 中即可。

```tsx
import InjectionRender from 'gaea-injection-render';
import { Grid } from '@/gaea-components/antd-mobile';
import { injectPropsToUI } from '@/utils/gaea';

const pageConfig = {
  menus: [
    {
      text: '菜单一',
      icon: <CustomIcon type='empty' />,
    },
    {
      text: '菜单二',
      icon: <CustomIcon type='empty' />,
    },
  ],
  handleMenusClick: (item) => {
    console.log(item);
  },
}

export default () => {
  return (
    <InjectionRender
      componentClasses={[
        Grid,
        // custom components...
      ]}
      value={injectPropsToUI(renderJson, pageConfig)}
    />
  );
}
```
