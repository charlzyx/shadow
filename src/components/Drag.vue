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
    dragstart(ev) {
      console.log('start', this, props);
      // const vnode = this.$slots.default && this.$slots.default[0];
      // const props = this.dragProps || vnode && vnode.componentInstance.$props;
      const props = this.dragProps
      ev.dataTransfer.setData("text/plain", JSON.stringify(props));
    },
  }

}
</script>

<style>
</style>
