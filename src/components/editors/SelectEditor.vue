<template>
  <div>
    <select :value="value" @input="ev => change(ev.target.value)">
      <option v-for="(op, index) in options" :value="op" :key="index">{{op}}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['value', 'change', 'options']
}
</script>

<style>

</style>
