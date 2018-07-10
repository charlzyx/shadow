<template>
  <div>
    <div @drag="drag">D</div>
    <div class="item">
      <div class="label">
        <slot name="label"></slot>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    drag(e) {
      conosle.log('innerd')
      this.$emit('drag', e);
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  border: 1px solid #cca;
  border-width: 1px 0;
  justify-content: space-between;
  align-items: center;
}
.label {
  color: #666;
}
</style>
