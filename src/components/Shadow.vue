<template>
  <div class="hideinbush">
    <h1>Shadow</h1>
    <div class="shadow">
      <div class="col">
        <component
          v-for="(comp, index) in comps"
          :key="index"
          :is="comp"
        />
      </div>
      <div class="col">
        <group-item v-bind="groupDefaults">
        </group-item>
      </div>
      <div class="col">
        <drop @drop="dropToRm" class="col drop-rm-zone">
        </drop>
        <div>
          <props-editor></props-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupItem from './GroupItem';
import InputItem from './InputItem';
import OptionItem from './OptionItem';
import Drag from './Drag';
import Drop from './Drop';
import PropsEditor from './PropsEditor';
import { groupProps, genDefaults } from './props';

const comps = {
  GroupItem,
  InputItem,
  OptionItem,
};



const groupDefaults = { ...groupProps, label: 'Group', type: 'Group', id: 'rootId', groupId: 'rootGroup' };

export default {
  components: {...comps, Drag, Drop, PropsEditor },
  data() {
    return {
      comps: Object.keys(comps),
      currentProps: null,
      propsList: [],
      groupDefaults,
    }
  },
  methods: {
    dropToRm({itemProps, ev}) {
      this.$store.commit('RM_ITEM_AT_GROUP', itemProps);
    }
  },
  mounted() {
    this.$store.commit('INIT_FORM', groupDefaults)
  }
}
</script>

<style>
.shadow {
  display: flex;
}
.col {
  flex: 1;
  padding: 10px;
  border-right: 1px solid #000;
}
.drop-rm-zone {
  height: 100px;
  background: #ebb;
}

</style>
