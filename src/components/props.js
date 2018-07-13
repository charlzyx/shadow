export const baseProps = {
  formId: null,
  id: null,
  value: null,
  label: null,
  type: null
}

const is = (val, type) => Object.prototype.toString.call(val) === `[Object ${type}]`

export const genDefaults = (props) => {
  const defaults = Object.keys(props).reduce((obj, key) => {
    const val = props[key]
    obj[key] = {
      default: is(val, 'Object') || is(val, 'Array') ? () => val : val
    }
    return obj
  }, {})
  return defaults
}
