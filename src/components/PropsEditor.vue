<template>
  <drop class="prop-edit-area" @drop="toEdit">
    <div v-for="key in itemKeys" :key="key" class="prop-edit-item">
      <span>{{key}}</span><input :value="editingItem[key]" @input="ev => changeItem(key, ev)" type="text">
    </div>
  </drop>
</template>

<script>

import Drop from './Drop';
export default {
  components: { Drop },
  computed: {
    editingItem() {
      return this.$store.getters.editingItem
    },
    itemKeys() {
      return Object.keys(this.editingItem)
    }
  },
  methods: {
    toEdit({ itemProps, ev }) {
      if (itemProps.id) {
        this.$store.commit('SET_EDIT_ITEM_ID', itemProps.id)
      }
    },
    changeItem(key, ev) {
      const val = ev.target.value
      this.$store.commit('CAHNGE_ITEM_PROPS', { key, val })
    }
  }
}
</script>

<style>
.prop-edit-area {
  min-height: 200px;
  background: #acc;
}
.prop-edit-item {
  display: flex;
  justify-content: space-between;
}
</style>
