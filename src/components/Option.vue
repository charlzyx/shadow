<template>
  <div>
    <h3>Option Group</h3>
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'

const defaults = { ...baseProps, label: 'Option' };
export default {
  props: genDefaults(defaults),
}
</script>

<style>

</style>
