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
};
export const actions = {
  loadUser({ commit }) {
    this.$axios
      .get('http://localhost:3000/users')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  loadMessages({ commit }) {
    this.$axios
      .get('http://localhost:3000/messages')
      .then((response) => {
        commit('LOAD_MESSAGES', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  sendMessage({ dispatch }, msg) {
    this.$axios
      .post('http://localhost:3000/messages', msg, {
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
