<template>
  <div>
    <h3>Input</h3>
    <drag :dragProps="$props" />
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'
import Drag from './Drag';

const defaults = { ...baseProps, label: 'Input', type: 'Input' };
export default {
  components: { Drag },
  props: genDefaults(defaults),
}
</script>

<style>

</style>
