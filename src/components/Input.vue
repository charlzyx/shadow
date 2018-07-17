<template>
  <div class="sd-input">
    <div class="sd-item-head">
      <div>Input</div>
      <drop @drop="sortDrop" class="sd-group-sort" style="flex: 1; margin: 0 4px;">
        <div class="sort-zone"></div>
      </drop>
      <drag :dragProps="$props" @dragend="dragend" />
    </div>
    <div>
      <div class="sd-item-code">
        <p>{{$props}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { baseProps ,genDefaults } from './props'
import Drag from './Drag';
import Drop from './Drop';

const defaults = { ...baseProps, label: 'Input', type: 'Input' };
export default {
  components: { Drag, Drop },
  props: {
    ...genDefaults(defaults),
    dragType: {
      default: 'no',
    }
  },
  methods: {
    sortDrop({ itemProps }) {
      this.$emit('willInsert', {
        willInsertProps: itemProps,
        refItemProps: JSON.parse(JSON.stringify(this.$props)),
      });
    }
  }
}
</script>

<style>
.sort-zone {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sort-zone::after {
  content: '排序插入区域';
  display: flex;
  font-size: 20px;
  color: #fff;
}
</style>
