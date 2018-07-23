<template>
  <div class="group-item">
    <item v-bind="$props" @willInsert="willInsert">
      <div class="group-op-area">
        <drop @drop="dropIn" class="group-drop-in">
          放置区域
        </drop>
      </div>
      <div class="sd-item-area">
        <component
          :is="`${props.type}Item`"
          v-for="props in citems"
          :key="props.id"
          v-bind="props"
          @willInsert="sortComp"
        />
      </div>
    </item>
  </div>
</template>

<script>
import Item from './Item'
import InputItem from './InputItem'
import OptionItem from './OptionItem'
import Drag from './Drag'
import Drop from './Drop'
import { groupProps, genDefaults } from './props'

const comps = {
  InputItem,
  OptionItem
}

export default {
  name: 'GroupItem',
  props: genDefaults(groupProps),
  components: { ...comps, Item, Drag, Drop },
  data () {
    return {
      // items: [],
    }
  },
  computed: {
    citems () {
      return this.$store.getters.getItemsById(this.id)
    }
  },
  methods: {
    dropIn ({itemProps, ev}) {
      this.$store.commit('ADD_ITEM_TO_GROUP', { groupId: this.id, item: itemProps })
    },
    sortComp ({insertItem, refItem}) {
      this.$store.commit('SORT_ITEM_AT_GROUP', { groupId: this.id, insertItem, refItem })
    },
    willInsert (args) {
      this.$emit('willInsert', args)
    }
  }
}
</script>

<style>
.group-op-area {
  display: flex;
  height: 40px;
}
.group-drop-in {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgreen;
}
.group-drop-out {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightcoral;
}
</style>
