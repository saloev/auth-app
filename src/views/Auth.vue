<template>
  <div class="auth">
    <h1>Login</h1>
    <BaseForm />
  </div>
</template>
<script>
import BaseForm from '@/components/Base/BaseForm.vue'

export default {
  name: 'Auth',

  components: {
    BaseForm,
  },
}
</script>
