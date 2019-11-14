import { addFormInjectToEditor } from '@/utils/gaea';
import { FormItem } from '@/components/Form';

export type SetFormItems = (form: any) => FormItem[]
export type HandleSubmit = (fieldsValue: any) => void
export class Props {
  public editSetting = {
    key: 'form',
    name: 'Form - 表单',
    editors: [
      ...addFormInjectToEditor(),
      'Function',
      {
        type: 'string',
        field: 'header',
        text: 'Header',
      },
      {
        type: 'string',
        field: 'buttonText',
        text: 'ButtonText',
      },
    ],
  };

  public header?: string;
  public buttonText: string = '确定';
  public setFormItems: SetFormItems = () => [];
  public onSubmit?: HandleSubmit;
}

export class State { }
