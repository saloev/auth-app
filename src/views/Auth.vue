<template>
  <div class="auth">
    <transition-group name="fade">
      <BaseTitle class="auth__title" title="Account Login" v-show="show" :key="'title'" />
      <BaseForm class="auth__form" v-show="show" :key="'form'" @submitForm="authUser" ref="form" />
    </transition-group>
    <BaseAlert :show-alert="alert.show" :text="alert.msg" :type="alert.type" />
  </div>
</template>
<script>
import BaseForm from '@/components/Base/BaseForm.vue';
import BaseTitle from '@/components/Base/BasePageTitle.vue';
import BaseAlert from '@/components/Base/BaseAlert.vue';

export default {
  name: 'Auth',

  components: {
    BaseForm,
    BaseTitle,
    BaseAlert,
  },

  data: () => ({
    show: false,
    timeout: null,
    alertTimeout: null,
    alert: {
      show: false,
      msg: '',
    },
  }),

  watch: {
    user: {
      handler(value) {
        if (value)
          this.$router.push({
            name: 'Home',
          });
      },
      immediate: true,
    },
  },

  computed: {
    user() {
      return this.$store.getters.user && this.$store.getters.user.uid;
    },
  },

  methods: {
    animateAppearance() {
      if (this.timeout) clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.show = true;
      }, 500);
    },

    showStatus(msg, type = 'error') {
      this.alert = {
        show: true,
        msg,
        type,
      };

      if (this.alertTimeout) clearTimeout(this.alertTimeout);
      this.alertTimeout = setTimeout(() => {
        this.alert = {
          show: false,
          msg,
          type,
        };
      });
    },

    authUser(data) {
      this.$store
        .dispatch('signInUser', data)
        .then(res => {
          return Promise.resolve(res);
        })
        .then(res => {
          // @see https://developers.google.com/web/fundamentals/security/credential-management/save-forms
          // Instantiate PasswordCredential with the form
          if (window.PasswordCredential) {
            const saveData = new PasswordCredential({id: Math.ceil(Math.random() * 10), password: data.password}); // eslint-disable-line no-undef
            return navigator.credentials.store(saveData);
          }

          return Promise.resolve(res);
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          this.showStatus(e);
          console.error(e);
        });
    },
  },

  mounted() {
    console.log();
    this.animateAppearance();
    // console.log(this.user)
    // setTimeout(() => {
    //   console.log(this.user)
    // }, 5000)
  },
};
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
