import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

let uuid = 0

const findItemById = (id, items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    if (item.id === id) return item
    if (Array.isArray(item.items)) {
      const subItem = findItemById(id, item.items)
      if (subItem) return subItem
    }
  }
  return false
}

const findItemsById = (id, items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.id === id) return item.items
    if (Array.isArray(item.items)) {
      const subItem = findItemsById(id, item.items)
      if (subItem) return subItem
    }
  }
  return false
}

const makeId = (item, groupId = ++uuid) => {
  if (!item.groupId) item.groupId = groupId
  if (!item.id) item.id = `fe_${++uuid}`
  if (!item.value) item.value = item.id
  return item
}

const store = new Store({
  state: {
    form: [],
    editingItemId: null
  },
  getters: {
    getItemsById: state => groupId => {
      const items = findItemsById(groupId, state.form)
      return items || []
    },
    editingItem (state) {
      return findItemById(state.editingItemId, state.form)
    }
  },
  mutations: {
    INIT_FORM (state, from) {
      state.form = [from]
    },
    SORT_ITEM_AT_GROUP (state, { groupId, insertItem, refItem }) {
      const group = findItemById(groupId, state.form)
      const items = (group && group.items) || []
      const toRmIndex = insertItem.sortIndex
      let insertIndex = refItem.sortIndex
      insertIndex = toRmIndex > insertIndex
        ? insertIndex
        : insertIndex - 1

      if (insertItem.groupId === group.id) {
        // 这步操作后, 数组长度已经减少
        items.splice(toRmIndex, 1)
        items.splice(insertIndex, 0, insertItem)
        group.items = items
          .map((item, index) => ({...item, sortIndex: index}))
      }
    },
    ADD_ITEM_TO_GROUP (state, { groupId, item }) {
      const group = findItemById(groupId, state.form)
      if (group) {
        const idItem = makeId(item, group.id)
        if (idItem.groupId === group.id) {
          if (group.items.find(i => i.id === item.id)) return
          group.items.push({ ...item, sortIndex: group.items.length })
        }
      }
    },
    RM_ITEM_AT_GROUP (state, item) {
      const group = findItemById(item.groupId, state.form)
      if (group) {
        group.items = group.items.filter(xitem => xitem.id !== item.id)
          .map((i, index) => ({ ...i, sortIndex: index }))
      }
    },
    SET_EDIT_ITEM_ID (state, itemId) {
      state.editingItemId = itemId
    },
    CAHNGE_ITEM_PROPS (state, { key, val }) {
      const editingItem = findItemById(state.editingItemId, state.form)
      Vue.set(editingItem, key, val)
    }
  }
})

export default store
