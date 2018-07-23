<template>
  <div>
    <item v-bind="$props" @willInsert="willInsert">
      Input Content
    </item>
  </div>
</template>

<script>
import Item from './Item'
import { inputProps, genDefaults } from './props'

export default {
  props: genDefaults(inputProps),
  components: { Item },
  methods: {
    willInsert (args) {
      this.$emit('willInsert', args)
    }
  }
}
</script>

<style>

</style>
