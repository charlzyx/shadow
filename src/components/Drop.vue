<template>
  <div @drop.stop="drop" @dragover.stop.prevent="dragover">
    <slot />
  </div>
</template>

<script>
import bus from './bus';
export default {
  methods: {
    drop(ev) {
      const propsStr = ev.dataTransfer.getData("text");
      this.$emit('drop', JSON.parse(propsStr));
      bus.using = false;
    },
    dragover(e) {
      this.$emit('dragover', e);
    }
  }

}
</script>

<style>

</style>
