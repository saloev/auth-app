<template>
  <transition name="fade">
    <p class="base-alert" :style="setVars" v-show="showAlert">
      <span class="base-alert--text">{{ text }}</span>
    </p>
  </transition>
</template>
<script>
export default {
  name: 'BaseAlert',

  props: {
    showAlert: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default() {
        return 'success'
      },
      validator(value) {
        return ['success', 'error'].indexOf(value) !== -1
      },
    },
  },

  computed: {
    setVars() {
      const dispatchType = {
        success: () => ({
          '--bg-color': '#13ce66',
          '--text-color': '#222222',
        }),
        error: () => ({
          '--bg-color': '#ff6766',
          '--text-color': '#fff',
        }),
      }

      return dispatchType[this.type]()
    },
  },

  watch: {
    show(value) {
      this.$emit('update:showAlert', value)
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('update:showAlert', false)
      }, 2500)
    },
  },

  data: () => ({
    show: false,
    timeout: null,
  }),

  mounted() {
    this.show = this.showAlert
  },
}
</script>
<style lang="scss">
.base-alert {
  position: fixed;
  top: 40px;
  left: 50%;

  min-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;

  color: var(--text-color);

  border-radius: 10px;
  background-color: var(--bg-color);

  transform: translateX(-50%);
}
</style>
