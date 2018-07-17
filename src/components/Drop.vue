<template>
  <div @drop.stop="drop" @dragover.stop.prevent="dragover">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    drop(ev) {
      const itemPropsStr = ev.dataTransfer.getData("text");
      const itemProps = JSON.parse(itemPropsStr);
      this.$emit('drop', {
        itemProps,
        ev
      });
    },
    dragover(ev) {
      this.$emit('dragover', ev);
    }
  }

}
</script>

<style>

</style>
