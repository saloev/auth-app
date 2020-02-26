<template>
  <p class="base-input__wrap">
    <label class="base-input__label">
      <span class="base-input__label-text">{{ item.label }}</span>
      <input
        class="base-input__input"
        :type="item.type"
        v-model="inputData"
        :required="item.validate"
        :autocomplete="item.autocomplete"
      />
    </label>
  </p>
</template>
<script>
export default {
  name: 'BaseInputs',

  props: {
    item: {
      type: Object,
      default() {
        return {
          type: 'text',
          label: 'Login',
          autocomplete: 'name',
          validate: true,
        }
      },
    },
    value: null,
  },

  watch: {
    inputData() {
      this.$emit('update:value', this.inputData)
    },
  },

  data: () => ({
    inputData: null,
  }),
}
</script>
