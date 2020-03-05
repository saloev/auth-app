import Vue from 'vue';
import Vuex from 'vuex';

import firebase from '@/plugins/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    isAuthStateChangedSet: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthStateChanged(state, payload) {
      state.isAuthStateChangedSet = payload;
    },
  },
  actions: {
    fetchUser({ commit }, payload) {
      if (payload) commit('setUser', payload);
      else commit('setUser', null);
    },

    signInUser({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user);
        })
        .catch(e => {
          console.error(e);
        });
    },

    logoutUser({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('user', null);
        })
        .catch(e => {
          console.error(e);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
