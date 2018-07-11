<template>
  <div>
    <h3>Select Group</h3>
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'

const defaults = { ...baseProps, label: 'Select' };
export default {
  props: genDefaults(defaults),
}
</script>

<style>

</style>
