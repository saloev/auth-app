<template>
  <div class="auth">
    <transition-group name="fade">
      <BaseTitle class="auth__title" title="Account Login" v-show="show" :key="'title'"/>
      <BaseForm class="auth__form" v-show="show" :key="'form'"/>
    </transition-group>
  </div>
</template>
<script>
import BaseForm from '@/components/Base/BaseForm.vue'
import BaseTitle from '@/components/Base/BasePageTitle.vue'

export default {
  name: 'Auth',

  components: {
    BaseForm,
    BaseTitle,
  },

  data: () => ({
    show: false,
    timeout: null,
  }),

  methods: {
    animateAppearance() {
      if (this.timeout) clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.show = true;
      }, 500);
    },
  },

  mounted() {
    this.animateAppearance()
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
