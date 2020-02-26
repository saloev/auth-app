<template>
  <p class="input__wrap">
    <label class="input__label">
      <span class="input__label-text">{{ item.label }}</span>
      <input
        class="input"
        v-model="inputData"
        :placeholder="item.placeholder"
        :type="item.type"
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

<style lang="scss">
.input {
  display: block;
  width: 100%;
  outline: none;
  padding: 12px 20px;
  border: 0;

  border-radius: 4px;
  background: #c6c0d3;

  font-weight: 500;
  color: #000;

  border: 2px solid transparent;

  transition: 0.3s ease-in-out;

  @include setFontSizeAndLineHeight(4vw);

  @include adopt($md) {
    @include setFontSizeAndLineHeight(1.5vw);
  }

  &:hover {
    border-color: #5a5a75;
  }

  &:focus {
    border-color: var(--color-primary);
  }

  &__label {
    &-text {
      margin-bottom: 5px;
      display: block;

      text-transform: capitalize;
      color: #fff;

      @include setFontSizeAndLineHeight(6vw);

      @include adopt($md) {
        @include setFontSizeAndLineHeight(2vw);
      }
    }
  }
}
</style>
