import mitt from 'mitt'

const eBus = {}
const emitter = mitt()

eBus.$on = emitter.on;
eBus.$off = emitter.off;
eBus.$emit = emitter.emit;

export default eBus;