<template>
  <div class="home">
    <BaseButton
      class="home__btn"
      :btn="{
        type: 'button',
        text: 'log out',
        maxWidth: '200px',
        bgColor: '#000',
      }"
      @click.native="logoutUser"
    />

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
import BaseButton from '@/components/Base/BaseButton.vue'

export default {
  name: 'Home',

  components: {
    BaseButton,
  },

  methods: {
    logoutUser() {
      this.$store
        .dispatch('logoutUser')
        .then(() => {
          this.$router.push({
            name: 'Auth',
          })
        })
        .catch(e => {
          console.error(e)
        })
    },
  },
}
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 20px;

  background-color: var(--color-primary);

  &__btn {
    margin-bottom: 20px;
  }
}
</style>
