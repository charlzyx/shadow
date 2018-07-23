<template>
  <div>
    <item v-bind="$props" @willInsert="willInsert">
      {{value}}
    </item>
  </div>
</template>

<script>
import Item from './Item'
import { optionProps, genDefaults } from './props'

export default {
  props: genDefaults(optionProps),
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
