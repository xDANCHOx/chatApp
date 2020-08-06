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
      if (this.user !== '') {
        return false;
      } else return true;
    },
  },
  methods: {
    submit() {
      this.$store.commit('SET_USER', this.user.name);
      this.$router.push('/chat');
      this.$axios
        .post('http://localhost:3000/users', this.user, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
