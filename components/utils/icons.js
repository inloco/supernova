/**
 * Since we don't use the default semantic ui icons, we need to pass
 * the given icon code as a className instead of passing it directly.
 * This is a utility function to avoid doing that manually everywhere.
 */
export const normalizeIconProp = icon => {
  if (typeof icon === 'string') {
    return { className: icon }
  }
  return icon
}
