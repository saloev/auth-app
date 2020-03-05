<template>
  <h1 class="page-title">{{ title }}</h1>
</template>
<script>
export default {
  name: 'BasePageTitle',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.page-title {
  margin: 0;
  margin-bottom: 20px;

  @include setFontSizeAndLineHeight(10vw);
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @include adopt($md) {
    @include setFontSizeAndLineHeight(5vw);
  }
}
</style>
