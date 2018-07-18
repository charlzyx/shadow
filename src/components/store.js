import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

let uuid = 0

const findItemById = (id, items) => {
  console.log(id)
  for (let i = 0; i < items.length; i++) {
    const item = items[i]

    if (item.id === id) return item
    if (Array.isArray(item.items)) {
      return findItemById(id, item.items)
    }
  }
  return false
}

const findItemsById = (id, items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.id === id) return item.items
    if (Array.isArray(item.items)) {
      return findItemsById(id, item.items)
    }
  }
  return false
}

const makeId = (item, groupId = ++uuid) => {
  if (!item.groupId) item.groupId = groupId
  if (!item.id) item.id = ++uuid
  return item
}

const store = new Store({
  state: {
    form: []
  },
  getters: {
    getItemsById: state => groupId => {
      const items = findItemsById(groupId, state.form)
      console.log('getters items', items)
      return items || []
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
    }
  }
})

export default store
