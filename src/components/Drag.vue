<template>
  <div
    @dragstart.stop="dragstart"
    draggable
  >
    <slot>
      <div>拖我</div>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['dragProps'],
  methods: {
    dragstart (ev) {
      const props = this.dragProps
      ev.dataTransfer.setData('text/plain', JSON.stringify(props))
    }
  }

}
</script>

<style>
</style>
