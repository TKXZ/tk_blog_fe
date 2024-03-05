import mitt from 'mitt'

const eBus = {}
const emitter = mitt()

eBus.eventQueue = []

const $emit = (eventName, ...args) => {
  if (!eventName.trim()) return;
  const emitInstance = eBus.eventQueue.find(e => e.eventName === eventName);
  if (emitInstance) {
    emitInstance.args = args;
  } else {
    eBus.eventQueue.push({
      eventName,
      fnArr: [],
      args
    })
  }
  emitter.emit(eventName, ...args)
}

const $on = (eventName, fn) => {
  if (!eventName.trim() && !fn) return;
  const emitInstance = eBus.eventQueue.find(e => e.eventName === eventName);
  if (emitInstance) {
    emitInstance.fnArr.push(fn);
  } else {
    ;
  }
  emitter.on(eventName, fn)
}

const $off = (eventName, fn) => {
  if (!eventName.trim() && fn) return;
  const emitInstance = eBus.eventQueue.find(e => e.eventName === eventName);
  if (emitInstance) {
    const offedFn = emitInstance.fnArr.filter(f => f === fn)
    const newFnArr = emitInstance.fnArr.filter(f => f !== fn)
    emitInstance.fnArr == newFnArr;
    emitter.off(eventName, offedFn);
  } else {
    ;
  }
}

const $offAll = () => {
  eBus.eventQueue.forEach(e => {
    e.fnArr.forEach(f => {
      emitter.off(e.eventName, f);
    })
  })
  eBus.eventQueue = [];
}


eBus.$on = $on
eBus.$off = $off
eBus.$emit = $emit
eBus.$offAll = $offAll

export default eBus