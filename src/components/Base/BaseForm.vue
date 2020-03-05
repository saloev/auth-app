<template>
  <form class="form" @submit.prevent="submitForm">
    <BaseInput
      v-for="(input, index) in inputs"
      :key="`base-input-item--${index}`"
      :item="input"
      :value.sync="form[input.label]"
    />

    <transition name="fade">
      <p v-show="error.show">
        {{ error.text }}
      </p>
    </transition>

    <BaseButton :btn="{ type: 'submit', text: 'login' }" />
  </form>
</template>
<script>
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';

export default {
  name: 'BaseForm',

  components: {
    BaseInput,
    BaseButton,
  },

  props: {
    inputs: {
      type: Array,
      default() {
        return [
          {
            type: 'email',
            label: 'email',
            autocomplete: 'username email',
            placeholder: 'example@mail.com',
            validate: true,
            validateFunc(value) {
              // @see http://jsfiddle.net/ghvj4gy9/embedded/result,js/
              const MAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
              const isEmailValie = MAIL_REGEX.test(`${value}`);
              if (isEmailValie) return { err: false };

              return {
                err: true,
                msg: 'Email not valid',
              };
            },
          },
          {
            type: 'password',
            label: 'password',
            autocomplete: 'current-password',
            placeholder: '***',
            validate: true,
            validateFunc(value) {
              if (value.length <= 5) {
                return {
                  err: true,
                  msg: 'Password must contain more than 5 symbols',
                };
              }

              const isContaintNumber = /\d+/.test(value);
              if (!isContaintNumber) {
                return {
                  err: true,
                  msg: 'Password must containt at least one number',
                };
              }

              return {
                err: false,
              };
            },
          },
        ];
      },
    },
  },

  data: () => ({
    form: {},
    error: {
      show: false,
      text: null,
      timeout: null,
    },
  }),
  created() {
    // create and save v-model inputs to form data
    this.form = this.inputs.reduce(
      (acc, { label }) => ({
        [label]: null,
        ...acc,
      }),
      {}
    );
  },

  methods: {
    showError(msg) {
      if (this.error.timeout) clearTimeout(this.error.timeout);

      const timeout = setTimeout(() => {
        this.error = {
          show: false,
          text: null,
          timeout: null,
        };
      }, 2500);

      this.error = {
        show: true,
        text: msg,
        timeout,
      };
    },

    validateForm() {
      return this.inputs.some(({ label, validate, validateFunc }) => {
        if (!validate) return false;

        const value = this.form[label];
        // if empty
        if (value === null || value === '') {
          this.showError(`${label} is required`);
          return true;
        }

        if (!validateFunc) return false;

        const isHasError = validateFunc(value);

        if (isHasError.err) {
          this.showError(isHasError.msg);
          return true;
        }

        return false;
      });
    },

    submitForm() {
      if (this.validateForm()) return;
      this.$emit('submitForm', this.form);
    },
  },
};
</script>
<style lang="scss">
.form {
  min-width: 280px;
}
</style>
