<template>
  <div>
    <h3>Group</h3>
    <drag :dragProps="$props" />
    <div>
      ====={{$props}}
      <drop @drop="drop" @dragover="dragover">
        <div class="drop-zone">
          <component
            v-for="(props, index) in items"
            :key="index"
            :is="props.type"
          />
          {{items}}
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

export default {
  name: 'Group',
  data() {
    return {
      items: []
    }
  },
  components: comps,
  props: genDefaults(defaults),
  methods: {
    drop(e) {
      this.items.push(e);
      console.log('group drop', e);
    },
    dragover(e) {
      // console.log('group dragover', e);
    },
  }
}
</script>

<style>
.drop-zone {
  min-height: 100px;
  background: #efefef;
}
</style>
