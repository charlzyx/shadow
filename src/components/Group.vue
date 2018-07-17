<template>
  <div class="sd-group">
    <div class="sd-item-head">
      <div class="sd-item-head-title">Group</div>
      <drop @drop="sortDrop" class="sd-item-sort">
        <div class="sort-zone"></div>
      </drop>
      <drag :dragProps="$props" @dragend="dragend" class="sd-item-head-drag" />
    </div>

    <div>
      <div class="sd-item-code">
        <p>{{$props}}</p>
      </div>
      <drop @drop="drop">
        <div class="drop-zone">
          <div class="drop-zone-tip" v-if="items.length === 0">
            放置区域
          </div>
          <component
            v-for="props in items"
            :key="props.id"
            v-bind="props"
            :is="props.type"
            dragType="move"
            @willInsert="sortComp"
          />
        </div>
      </drop>
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'
import Drop from './Drop';
import Drag from './Drag';
import Input from './Input';
const comps = {
  Input,
  Drop,
  Drag,
};

const defaults = { ...baseProps, label: 'Group', type: 'Group' };

const makeId = (item, groupId = `g_${Math.random() * +new Date()}`) => {
  if (!item.groupId) item.groupId = groupId;
  if (!item.id) item.id = `f_${Math.random() * +new Date()}`
  return item;
}

export default {
  name: 'Group',
  data() {
    return {
      items: []
    }
  },
  components: comps,
  props: {
    ...genDefaults(defaults),
    dragType: {
      default: 'no'
    }
  },
  methods: {
    drop({itemProps, ev}) {
      console.dir(ev.target);
      const item = makeId(itemProps, this.id);
      if (this.items.find(i => i.id === item.id)) return;
      this.items.push({...item, sortIndex: this.items.length });
    },
    dragend() {
      this.$emit('dragend', this.id)
    },
    sortComp({willInsertProps, refItemProps}) {
      const willRmSortIndex = willInsertProps.sortIndex;
      const refSortIndex = refItemProps.sortIndex;
      const offset = willRmSortIndex > willInsertProps ? 0 : 1;
      if (willInsertProps.groupId === this.id) {
        // 这步操作后, 数组长度已经减少
        this.items.splice(willRmSortIndex, 1);
        // 根据offset 来判断插入位置
        this.items.splice(refSortIndex - offset, 0, willInsertProps);
        this.items = this.items.map((item, index) => ({...item, sortIndex: index}));
      }
    },
    sortDrop({ itemProps }) {
      this.$emit('willInsert', {
        willInsertProps: itemProps,
        refItemProps: this.$props,
      });
    }
  }
}
</script>

<style>
.drop-zone {
  min-height: 100px;
  background: #efefef;
  border-radius: 4px;
  /* border: 2px dashed #acc; */
  position: relative;
}
.drop-zone-tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  color: #acc;
}
.sd-group .sd-group{
  border: 1px solid #acc;
  margin-left: 20px;
}
.sd-item-head {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cca;
  border: 1px solid #acc;
  color: #fff;
  padding: 0 10px;
}
.sd-item-head .sd-item-head-title{
}
.sd-item-head .sd-item-head-drag {

}
.sd-item-code {
  background-color: #666;
  padding: 2px;
  color: #ccc;
}
</style>
