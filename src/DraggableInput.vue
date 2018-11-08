<template>
  <input
    v-model="internalValue"
    type="text"
    @mousedown="clicking = true"
    @input="setValue($event.target.value)"
  >
</template>
<script>
export default {
  name: 'DraggableInput',

  props: {
    value: {
      type: Number,
      default: 0
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 100
    }
  },

  data() {
    return {
      clicking: false,
      internalValue: this.value,
      lastPosition: null
    }
  },

  watch: {
    clicking(isClicking) {
      if (!isClicking) {
        this.$emit('input', this.internalValue)
      }
    },

    value(value) {
      this.internalValue = value
    }
  },

  created() {
    document.addEventListener('mousemove', this.handleMousemove)
    document.addEventListener('mouseup', this.releaseClick)
  },

  beforeDestroy() {
    document.removeEventListener('mousemove', this.handleMousemove)
    document.removeEventListener('mouseup', this.releaseClick)
  },

  methods: {
    setValue(value) {
      this.internalValue = Number(value)
      this.$emit('input', this.internalValue)
    },

    releaseClick() {
      this.clicking = false
    },

    handleMousemove(e) {
      if (!this.clicking) {
        return
      }
      var viewportOffset = this.$el.getBoundingClientRect()

      let value
      if (!this.lastPosition) {
        value = e.clientY <= viewportOffset.top ? 1 : -1
      } else {
        value = this.lastPosition >= e.clientY ? 1 : -1
      }

      if (
        this.internalValue + value < this.min ||
        this.internalValue + value > this.max
      ) {
        return
      }

      this.internalValue += value
      this.lastPosition = e.clientY
    }
  }
}
</script>
