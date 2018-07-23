export const baseProps = {
  id: null,
  groupId: null,
  items: [],
  type: null,
  sortIndex: null,
  value: null,
  label: null,
  when: null,
  valid: true,
  field: '',
  props: null
}

export const groupProps = {
  ...baseProps,
  type: 'Group'
}

export const inputProps = {
  ...baseProps,
  type: 'Input'
}

export const optionProps = {
  ...baseProps,
  type: 'Option',
  props: {
    as: ['switch', 'option', 'radio', 'checkbox']
  }
}

const is = (val, type) => Object.prototype.toString.call(val) === `[object ${type}]`
const deepClone = (obj, newObj = {}) => {
  if (!is(obj, 'Array') && !is(obj, 'Object')) return obj
  if (is(obj, 'Array')) newObj = []
  for (let key in obj) {
    const now = obj[key]
    if (Array.isArray(now)) {
      newObj[key] = deepClone(now)
    }
    if (is(now, 'Object')) {
      newObj[key] = deepClone(now)
    }
    newObj[key] = now
  }
  return newObj
}
export const genDefaults = (oProps) => {
  const props = deepClone(oProps)
  const defaults = Object.keys(props).reduce((obj, key) => {
    const val = props[key]
    const isObjectOrArray = is(val, 'Object') || is(val, 'Array')
    obj[key] = isObjectOrArray
      ? { default: function () {
        return deepClone(val)
      } }
      : { default: val }
    return obj
  }, {})
  return defaults
}

// export default genDefaults(baseProps)
