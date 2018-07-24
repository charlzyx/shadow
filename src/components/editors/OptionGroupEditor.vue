<template>
  <drop @drop="dropIn" class="option-group-editor">
    {{groupVal}}
  </drop>
</template>

<script>
import Drop from '../Drop'
export default {
  props: ['groupId', 'value', 'change'],
  components: { Drop },
  data () {
    return {
      groupVal: this.value
    }
  },
  methods: {
    dropIn ({ itemProps, ev }) {
      console.log('dddddd', itemProps)
      if (itemProps.groupId !== this.groupId) return
      const props = {
        id: itemProps.id,
        label: itemProps.label,
        value: itemProps.value
      }
      const isExit = this.groupVal.some(item => item.id === props.id)
      if (isExit) return
      this.groupVal.push(props)
      this.change(this.groupVal)
    }
  }
}
</script>

<style>
.option-group-editor {
  min-height: 60px;
  background-color: #aca;
  flex: 1;
}
</style>
