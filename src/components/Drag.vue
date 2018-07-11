<template>
  <div @dragstart="dragstart" draggable>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      childProps: null,
    }
  },
  methods: {
    dragstart(e) {
      const vnode = this.$slots.default[0];
      const props = vnode && vnode.componentInstance.$props;
      this.$emit('dragstart', props);
    },
  }

}
</script>

<style>

</style>
