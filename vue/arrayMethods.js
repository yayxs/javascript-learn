const arrayProto = Array.prototype

export const arrayMethods = Object.create(arrayProto)
;['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'].forEach(
  (methods) => {
    const original = arrayProto[methods]
  }
)