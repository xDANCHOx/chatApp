const api = process.env.API_URL;
export const state = () => ({
  user: '',
  messages: [],
  users: [],
});
export const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  LOAD_MESSAGES: (state, messages) => {
    state.messages = messages;
  },
  LOAD_USERS: (state, users) => {
    state.users = users;
  },
};
export const actions = {
  newUser({ dispatch }, user) {
    this.$axios
      .post(api + '/users', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        dispatch('loadUser');
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadUser({ commit }) {
    this.$axios
      .get(api + '/users')
      .then((response) => {
        commit('LOAD_USERS', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadMessages({ commit }) {
    this.$axios
      .get(api + '/messages')
      .then((response) => {
        commit('LOAD_MESSAGES', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  sendMessage({ dispatch }, msg) {
    this.$axios
      .post(api + '/messages', msg, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        dispatch('loadMessages');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
