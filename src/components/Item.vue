<template>
  <div class="sd-form-item">
    <drag :dragProps="JSON.parse(JSON.stringify($props))" class="item-head" >
      <drop @drop="sortDrop" class="item-head-drop">
        <div>{{$props.type}}: {{$props.id}} | {{$props.groupId}}</div>
      </drop>
    </drag>
    <div class="item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Drag from './Drag';
import Drop from './Drop';
import { baseProps, genDefaults } from './props'

export default {
  components: { Drag, Drop },
  props: genDefaults(baseProps),
  methods: {
    sortDrop({ itemProps }) {
      this.$emit('willInsert', {
        insertItem: JSON.parse(JSON.stringify(itemProps)),
        refItem: JSON.parse(JSON.stringify(this.$props)),
      });
    }
  }
}
</script>

<style>
.sd-form-item {
}
.sd-form-item .item-head {
  background: #77affc;
  border-width: 1px 0;
}
</style>
