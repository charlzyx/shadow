<template>
  <div>
    <h3>Form Group</h3>
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'

const defaults = { ...baseProps, label: 'Form' };
export default {
  props: genDefaults(defaults),
}
</script>

<style>

</style>
