function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
/**
 * 过滤对象的函数属性
 * @param {Object} opts
 */
const mergeOptionsToData = (opts = {}) => {
  const options = Object.assign({}, opts)

  for (const key in options) {
    if (options.hasOwnProperty(key) && typeof options[key] === 'function') {
      delete options[key]
    }
  }

  return options
}


export {
  isObj,
  isDef,
  mergeOptionsToData
};
