<template>
  <div>
    <h3>TimePicker Group</h3>
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'

const defaults = { ...baseProps, label: 'TimePicker' };
export default {
  props: genDefaults(defaults),
}
</script>

<style>

</style>
