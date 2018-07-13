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
      <drop class="col" @drop="drop" @dragover="dragover">
        <drag>
          <component
            v-for="(props, index) in propsList"
            :key="index"
            :is="props.type"
          />
          {{propsList}}
        </drag>
      </drop>
    </div>
  </div>
</template>

<script>
import Group from './Group';
import Input from './Input';
import Drag from './Drag';
import Drop from './Drop';

const comps = {
  Input,
  Group,
};
export default {
  components: {...comps, Drag, Drop },
  data() {
    return {
      comps: Object.keys(comps),
      currentProps: null,
      propsList: [],
    }
  },
  methods: {
    dragover(e) {

    },
    drop(e) {
      console.log('drop', e);
      this.propsList.push(e);
    }
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
