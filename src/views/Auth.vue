<template>
  <div class="auth">
    <BaseTitle class="auth__title" title="Account Login"/>
    <BaseForm class="auth__form"/>
  </div>
</template>
<script>
import BaseForm from '@/components/Base/BaseForm.vue'
import BaseTitle from '@/components/Base/BasePageTitle.vue';

export default {
  name: 'Auth',

  components: {
    BaseForm,
    BaseTitle,
  },
}
</script>
<style lang="scss">
.auth {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--color-primary--light);
}
</style>
