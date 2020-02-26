<template>
  <div class="main-layout">
    <MainHeader />
    <main>
      <reouter-view />
    </main>
  </div>
</template>
<script>
import MainHeader from './MainHeader.vue'

export default {
  name: 'MainLayout',

  components: {
    MainHeader,
  },
}
</script>
