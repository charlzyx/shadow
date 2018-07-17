<template>
  <div
    @dragstart.stop="dragstart"
    @dragend.stop="dragend"
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
    dragstart(ev) {
      const vnode = this.$slots.default && this.$slots.default[0];
      const props = this.dragProps || vnode && vnode.componentInstance.$props;
      ev.dataTransfer.setData("text/plain", JSON.stringify(props));
    },
    dragend(ev) {
      this.$emit('dragend');
    }
  }

}
</script>

<style>
</style>
