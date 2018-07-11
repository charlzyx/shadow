<template>
  <div class="hideinbush">
    <h1>Shadow</h1>
    <div class="shadow">
      <div class="col">
        <drag
          v-for="(comp, index) in comps"
          :key="index"
          @dragstart="dragstart"
        >
          <component
            :is="comp"
          />
        </drag>
      </div>
      <div class="col" @drop="drop" @dragover="dragover">
      </div>
    </div>
  </div>
</template>

<script>
import FFormGroup from './FormGroup';
import FInput from './Input';
import FOption from './Option';
import FSelect from './Select';
import FRadioGroup from './RadioGroup';
import FCheckboxGroup from './CheckboxGroup';
import FTimePicker from './TimePicker';
import Drag from './Drag';

const comps = {
  FFormGroup,
  FInput,
  FOption,
  FSelect,
  FRadioGroup,
  FCheckboxGroup,
  FTimePicker,
  Drag,
};
export default {
  components: comps,
  data() {
    return {
      comps: Object.keys(comps),
    }
  },
  methods: {
    dragstart(e) {
      console.table(JSON.parse(JSON.stringify(e, null, 2)));
    },
    dragover(e) {

    },
    drop(e) {

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
