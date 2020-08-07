<template>
  <div>
    <div
      class="d-flex justify-content-start mb-4"
      :class="
        user === message.name ? 'justify-content-end' : 'justify-content-start'
      "
    >
      <div v-if="user !== message.name" class="img-cont-msg">
        <b-avatar class="rounded-circle user-img" size="40px"></b-avatar>
      </div>
      <div
        class="msg-container"
        :class="{ 'msg-container-send': user === message.name }"
      >
        <p v-if="user !== message.name" class="msg-container-user">
          {{ message.name }}
        </p>
        {{ message.text }}
        <span
          class="msg-time"
          :class="{ 'msg-time-send': user === message.name }"
          >{{ message.time }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.img-cont-msg {
  height: 40px;
  width: 40px;
}
.msg-container {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.msg-container-send {
  background-color: #78e08f;
}
.msg-container-user {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 0;
}
.msg-time {
  position: absolute;
  left: 0;
  bottom: -18px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}
.msg-time-send {
  right: 0;
  left: auto;
}
</style>
