<template>
  <div>
    <h3>Radio Group</h3>
    <div>
      {{$props}}
    </div>
  </div>
</template>

<script>
import { baseProps ,genDefaults } from './props'

const defaults = { ...baseProps, label: 'Radio' };
export default {
  props: genDefaults(defaults),
}
</script>

<style>

</style>
