<template>
  <div class="main-layout">
    <!-- <MainHeader /> -->
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>
<script>
// import MainHeader from './MainHeader.vue'

export default {
  name: 'MainLayout',

  // components: {
  //   MainHeader,
  // },
}
</script>
