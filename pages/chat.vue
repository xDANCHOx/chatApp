<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center h-100">
      <div class="col-md-4 col-xl-3 chat">
        <div class="card mb-sm-3 mb-md-0 contacts_card">
          <div class="card-body contacts_body">
            <ul class="contacts">
              <li
                v-for="item in users"
                :key="item.id"
                :class="{ active: item.name === user }"
              >
                <div class="d-flex">
                  <div class="img_cont">
                    <b-avatar
                      class="rounded-circle user_img"
                      size="70px"
                    ></b-avatar>
                  </div>
                  <div class="user_info">
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-xl-6 chat">
        <div class="card">
          <div class="card-header msg_head">
            <h1 style="color: white;">Chat</h1>
          </div>
          <div ref="chat" class="card-body msg_card_body">
            <Message
              v-for="(message, index) in messages"
              :key="`message-${index}`"
              :message="message"
              :user="user"
            />
          </div>
          <div class="card-footer">
            <div class="input-group">
              <textarea
                v-model="data.text"
                class="form-control type_msg"
                placeholder="Type your message..."
              ></textarea>
              <div class="input-group-append" @click="send">
                <span class="input-group-text send_btn"
                  ><b-icon icon="chat" aria-hidden="true"></b-icon
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Message from '@/components/Message';
export default {
  components: {
    Message,
  },
  data() {
    return {
      data: {
        text: '',
        name: '',
        time: new Date().toString().slice(16, 24),
      },
    };
  },
  computed: {
    ...mapState(['user', 'messages', 'users']),
  },
  mounted() {
    setInterval(() => {
      this.$store.dispatch('loadMessages');
      this.$store.dispatch('loadUser');
    }, 2000);
  },
  methods: {
    send() {
      this.data.name = this.user;
      this.$store.dispatch('sendMessage', this.data);
      setTimeout(() => {
        this.data.text = '';
        if (this.$refs.chat) {
          this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
        }
      }, 100);
    },
  },
};
</script>

<style>
.card {
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.contacts_body {
  padding: 0.75rem 0 !important;
  white-space: nowrap;
}
.contacts {
  list-style: none;
  padding: 0;
  overflow: auto;
  height: 400px;
}
.contacts li {
  width: 100% !important;
  padding: 5px 10px;
  margin-bottom: 15px !important;
}
.active {
  background-color: rgba(0, 0, 0, 0.3);
}
.img_cont {
  position: relative;
  height: 70px;
  width: 70px;
}
.user_img {
  height: 70px;
  width: 70px;
  border: 1.5px solid #f5f6fa;
}
.user_info {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
}
.user_info span {
  font-size: 20px;
  color: white;
}
.user_info p {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
}
.card-header {
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
}
.msg_card_body {
  overflow: auto;
  height: 400px;
}
.card-footer {
  border-radius: 0 0 15px 15px !important;
  border-top: 0 !important;
}
.type_msg {
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  height: 60px !important;
  overflow: hidden;
  resize: none;
}
.type_msg:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.send_btn {
  border-radius: 0 15px 15px 0 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  cursor: pointer;
}
@media (max-width: 576px) {
  .contacts_card {
    margin-bottom: 15px !important;
  }
}
</style>
