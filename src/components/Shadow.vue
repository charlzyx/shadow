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
        <group v-bind="groupDefaults">
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import Group from './Group';
import Input from './Input';
import Drag from './Drag';
import Drop from './Drop';
import { baseProps ,genDefaults } from './props'

const comps = {
  Input,
  Group,
};



const groupDefaults = { ...baseProps, label: 'Group', type: 'Group', id: 'rootId', groupId: 'rootGroup' };

export default {
  components: {...comps, Drag, Drop },
  data() {
    return {
      comps: Object.keys(comps),
      currentProps: null,
      propsList: [],
      groupDefaults,
    }
  },
  methods: {
    // drop(e) {
    //   if (e.type === 'Group') {
    //     const comp = makeId(e);
    //     this.propsList.push(comp);
    //   }
    // }
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

</style>
