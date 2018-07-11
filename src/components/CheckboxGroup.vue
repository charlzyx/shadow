<template>
  <div>
    <h3>Checkbox Group</h3>
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'

const defaults = { ...baseProps, label: 'Checkbox', type: 'Checkbox' };
export default {
  props: genDefaults(defaults),
}
</script>

<style>

</style>
