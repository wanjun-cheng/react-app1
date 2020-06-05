import { Rule } from '@core/utils';

export const noChinese = Rule.validate(value => !(value && value.match(/[\u4e00-\u9fa5]/)), '请不要输入中文');
