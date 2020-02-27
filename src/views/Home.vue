<template>
  <div class="home">
    <BaseTitle title="Congratulations" />
    <video
      src="https://media.giphy.com/media/G3773sSDJHHy0/giphy.mp4"
      autoplay
      loop
      muted
      playsinline
    ></video>
  </div>
</template>

<script>
import BaseTitle from '@/components/Base/BasePageTitle.vue'

export default {
  name: 'Home',

  components: {
    BaseTitle,
  },
}
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 20px;

  background-color: var(--color-primary);
}
</style>
