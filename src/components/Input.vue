<template>
  <div v-if="shouldVisible">
    <item @drag="drag">
      <template slot="label">
        {{label}}
      </template>
      <input
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @input="onInput"
        type="text"
      >  
    </item>  
  </div>
</template>

<script>
import Item from './Item';
const parseVisibleExpress = (val) => JSON.parse(val);

export default {
  components: { Item },
  props: [
    // baseProps
    'id',
    'feId',
    'field',
    'valid',
    'visibleWhen',
    'disabled',
    'label',
    'value',
    'placeholder',
    'ruler',
    // inputProps
    'keyType',
    'suggest',
    // 通用
    // 'onChange'
  ],
  computed: {
    shouldVisible() {
      return parseVisibleExpress(this.visibleWhen) && this.valid;
    }
  },
  methods: {
    onInput(e) {
      this.$emit('onChange', e.target.value);
    },
    drag(e) {
      console.log(e);
    }
  }
}
</script>

<style scoped>
input {
  height: 40px;
  border: 0px solid #cba;
  border-radius: 4px;
}
</style>
