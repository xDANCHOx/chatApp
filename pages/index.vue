<template>
  <div class="card col-md-4 col-xl-2">
    <div class="card-body">
      <h5 class="card-title">Login</h5>
      <div class="mb-3">
        <input
          v-model="user.name"
          type="text"
          class="form-control"
          placeholder="Username"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary btn-block"
        :disabled="isDisabled"
        @click="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
      },
    };
  },
  computed: {
    isDisabled() {
      if (this.user.name !== '') {
        return false;
      } else return true;
    },
    users() {
      return this.$store.state.users;
    },
    existedUser() {
      let result = true;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].name === this.user.name) {
          result = false;
        }
      }
      return result;
    },
  },
  mounted() {
    this.$store.dispatch('loadUser');
  },
  methods: {
    submit() {
      this.user.name =
        this.user.name.charAt(0).toUpperCase() + this.user.name.slice(1);
      if (this.existedUser) {
        this.$store.dispatch('newUser', this.user);
      }
      this.$store.commit('SET_USER', this.user.name);
      this.$router.push('/chat');
    },
  },
};
</script>

<style></style>
