import baseFlatten from './.internal/22-baseFlatten'
function flatten(array) {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}
export default flatten
