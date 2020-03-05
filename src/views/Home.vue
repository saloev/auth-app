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

    <img
      src="https://media.giphy.com/media/G3773sSDJHHy0/200w_d.gif"
      alt="fat cat"
      style="width: 100%; max-width: 200px"
    />
  </div>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton.vue';

export default {
  name: 'Home',

  components: {
    BaseButton,
  },

  data: () => ({
    timeout: null,
  }),

  methods: {
    logoutUser() {
      this.$store
        .dispatch('logoutUser')
        .then(() => {
          this.$router.push({
            name: 'Auth',
          });
        })
        .catch(e => {
          console.error(e);
        });
    },

    /**
     * Force browser to show popover for saving password
     */
    reloadPage() {
      if (this.timeout) clearTimeout(this.timeout);
      const isPageAlreadyReloaded = localStorage.getItem('isHomePageReloaded');
      if (isPageAlreadyReloaded) return;

      this.timeout = setTimeout(() => {
        localStorage.setItem('isHomePageReloaded', 'true');
        window.location.reload();
      }, 500);
    },
  },

  mounted() {
    this.reloadPage();
  },
};
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
