<template>
  <div>
    <input
      :value="value"
      @input="ev => change(ev.target.value)"
      :editable="editable"
      type="text"
    >
  </div>
</template>

<script>
export default {
  props: ['value', 'change', 'editable']
}
</script>

<style>

</style>
