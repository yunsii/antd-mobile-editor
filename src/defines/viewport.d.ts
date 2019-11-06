declare interface InjectProperties {
  dataSource?: string;
  handleClick?: string;
}

/**
 * [Custom] Viewport's component instance info
 */
declare interface InstanceInfo {
  /**
   * Gaea key, use it can find componentClass, and access defaultProps.editSetting
   */
  gaeaKey: string;
  /**
   * 预设组件专有属性，实例化 componentClass 还是根据 gaeaKey 找，但是配置会优先根据 preGaeaKey 找
   */
  preGaeaKey?: string;
  /**
   * Component data, all operate save here
   */
  data: {
    /**
     * Merge to props
     */
    props?: {
      [prop: string]: any;
    } & InjectProperties;
  };
  /**
   * Children's instanceKey（only isContainer)
   * Component who's property isContainer is false will not have the property
   */
  childs?: string[];
  /**
   * Parent component's instanceKey
   * Root component's parentInstanceKey is null
   */
  parentInstanceKey: string;
}
