import DraggableInput from './DraggableInput'

// Export components individually
export { DraggableInput }

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component('DraggableInput', DraggableInput)
}

// Export the library as a plugin
export default { install: install }
