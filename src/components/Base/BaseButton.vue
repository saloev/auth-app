<template>
  <button class="button" :type="btn.type" :style="setColors">{{ btn.text }}</button>
</template>
<script>
export default {
  name: 'BaseButton',

  props: {
    btn: {
      type: Object,
      default() {
        return {
          text: 'Submit',
          type: 'submit',
        };
      },
    },
  },

  computed: {
    setColors() {
      return {
        '--color': this.btn.color,
        '--bg-color': this.btn.bgColor,
        '--hover-color': this.btn.hoverColor,
        '--max-width': this.btn.maxWidth,
      };
    },
  },
};
</script>
<style lang="scss">
.button {
  max-width: var(--max-width, 100%);
  width: 100%;
  outline: none;
  padding: 12px 20px;

  background: var(--bg-color, var(--color-primary));
  border: 0;
  border-radius: 4px;

  color: var(--color, #fff);
  text-transform: uppercase;

  cursor: pointer;

  transition: opacity 0.3s ease-in-out;

  @include setFontSizeAndLineHeight(6vw);

  @include adopt($md) {
    @include setFontSizeAndLineHeight(2.4vw);
  }

  &:hover,
  &:focus {
    opacity: 0.6;
  }
}
</style>
