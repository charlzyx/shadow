<template>
  <drop class="prop-edit-area" @drop="toEdit">
    <div class="prop-edit-item">
      <div>label</div>
      <input-editor :value="editingItem.label" :change="val => changeItem('label', val)"></input-editor>
    </div>
    <div class="prop-edit-item">
      <div>as</div>
      <select-editor :value="editingItem.as" :options="editingItem.enums.as" :change="val => changeItem('as', val)"></select-editor>
    </div>
    <div class="prop-edit-item" v-if="editingItem.type !== 'Group'">
      <div>value</div>
      <input-editor :value="editingItem.value" :change="val => changeItem('value', val)"></input-editor>
    </div>
    <div class="prop-edit-item" v-if="editingItem.type === 'Group'">
      <div>value</div>
      <option-group-editor :groupId="editingItem.id" :value="editingItem.value" :change="val => changeItem('value', val)"></option-group-editor>
    </div>
  </drop>
</template>

<script>
import Drop from './Drop'
import InputEditor from './editors/InputEditor'
import SelectEditor from './editors/SelectEditor'
import OptionGroupEditor from './editors/OptionGroupEditor'

export default {
  components: { Drop, InputEditor, SelectEditor, OptionGroupEditor },
  computed: {
    editingItem () {
      return this.$store.getters.editingItem || {enums: {}}
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
