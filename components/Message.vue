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
        :class="user === message.name ? 'msg-container-send' : 'msg-container'"
      >
        <p v-if="user !== message.name" class="msg-container-user">
          {{ message.name }}
        </p>
        {{ message.text }}
        <span :class="user === message.name ? 'msg-time-send' : 'msg-time'">{{
          message.time
        }}</span>
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
.msg-time {
  position: absolute;
  left: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}
.msg-container-send {
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 10px;
  border-radius: 25px;
  background-color: #78e08f;
  padding: 10px;
  position: relative;
}
.msg-container-user {
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 0;
}
.msg-time-send {
  position: absolute;
  right: 0;
  bottom: -15px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}
</style>
