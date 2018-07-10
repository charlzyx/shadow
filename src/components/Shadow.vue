<template>
    <div id="shadow">
      <div class="col">
        <Input
          :id="input.id"
          :feId="input.feId"
          :field="input.field"
          :valid="input.valid"
          :visibleWhen="input.visibleWhen"
          :disabled="input.disabled"
          :label="input.label"
          :value="input.value"
          :placeholder="input.placeholder"
          :ruler="input.ruler"
          :keyType="input.keyType"
          :suggest="input.suggest"
          @onChange="inputOnChange"
        />
      </div>
      <div class="col">
        {{input}}
      </div>
    </div>
</template>
<script>
import Input from './Input';


const types = [
  'Input',
  'Select',
  'TimePicker',
  'RadioGroup',
  'CheckboxGroup',
  'ImgUploader',
  'Option'
];

export const baseProps = {
  id: null,
  feId: null,
  field: null,
  valid: true,
  visibleWhen: true,
  disabled: false,
  label: 'welldone',
  value: null,
  placeholder: '你好啊',
  ruler: {
    when: ['onblur', 'onsubmit'],
    rule: Function | RegExp | String,
    tip: '格式不正确'
  },
}

const InputProps = {
  ...baseProps,
  value: '',
  keyType: ['number', 'phone', 'email'],
  suggest: {
    api: 'api/suggest',
    param: { any: null },
  },
}

const OptionProps = {
  ...baseProps,
}

const TimePicker = {
  ...baseProps,
  type: 'YYYY-MM-DD HH:mm:ss',
  range: false,
  min: Date | 'now',
  max: Date | 'now',
  limit: Date,
}

const SelectProps = {
  ...baseProps,
  options: [OptionProps]
}

const RadioGroupProps = {
  ...baseProps,
  options: [OptionProps]
}
const CheckBoxGroupProps = {
  ...baseProps,
  options: [OptionProps]
}
export default {
  components: { Input },
  data() {
    return {
      input: {
        ...InputProps,
      },
    }
  },
  methods: {
    inputOnChange(val) {
      this.input.value = val;
    }
  }
}
</script>
<style scoped>
#shadow {
  display: flex;
  flex-direction: 'row';
}
.col {
  flex: 1;
  padding: 10px;
}
</style>

