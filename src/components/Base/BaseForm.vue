<template>
  <form class="form">
    <BaseInput v-for="(input, index) in inputs" :key="`base-input-item--${index}`" :item="input" />
  </form>
</template>
<script>
import BaseInput from './BaseInput.vue'

export default {
  name: 'BaseForm',

  components: {
    BaseInput,
  },

  props: {
    inputs: {
      type: Array,
      default() {
        return [
          {
            type: 'text',
            label: 'Login',
            validate: true,
            autocomplete: 'name',
          },
          {
            type: 'password',
            label: 'Password',
            validate: true,
            autocomplete: 'current-password',
          },
        ]
      },
    },
  },

  data: () => ({
    form: {},
  }),
}
</script>
<style lang="scss"></style>
