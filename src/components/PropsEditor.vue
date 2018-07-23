<template>
  <drop class="prop-edit-area" @drop="toEdit">
    <div class="prop-edit-item">
      <div>label</div>
      <input-editor :value="editingItem.label" :change="val => changeItem('label', val)"></input-editor>
    </div>
    <div class="prop-edit-item">
      <div>value</div>
      <select-editor :value="editingItem.value" :options="editingItem.props.as" :change="val => changeItem('props.as', val)"></select-editor>
    </div>
  </drop>
</template>

<script>
import Drop from './Drop'
import InputEditor from './editors/InputEditor'
import SelectEditor from './editors/SelectEditor'

export default {
  components: { Drop, InputEditor, SelectEditor },
  computed: {
    editingItem () {
      return this.$store.getters.editingItem || {props: {}}
    },
    itemKeys () {
      return Object.keys(this.editingItem)
    }
  },
  methods: {
    toEdit ({ itemProps, ev }) {
      if (itemProps.id) {
        this.$store.commit('SET_EDIT_ITEM_ID', itemProps.id)
      }
    },
    changeItem (key, val) {
      console.log('ddd', key, val)
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
