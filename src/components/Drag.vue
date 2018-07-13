<template>
  <div @dragstart.stop="dragstart" draggable>
    <slot>
      <div>点我拖动</div>
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
  }

}
</script>

<style>

</style>
