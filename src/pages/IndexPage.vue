<script setup lang="ts">
import { ref } from 'vue'
// import { useStoreGlobal } from  '@/store/store-global'
// import router from 'src/router';


const text = ref('');
const password = ref('');
// const store=useStoreGlobal();
const isPwd = ref(true);
const content = ref('')
import axios from 'axios';

const login = () => {
  axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/token/',
    data: {
      username: text.value,
      password: Number(password.value)
    }
  })
    .then(function (response) {
      console.log(response)
      content.value = 'Welcome to the Aseel Vue App!';
      text.value = '';
      password.value = '';
    }).catch(function (error) {
      console.log(error);
      content.value = 'Wrong Username or Password';
    })
}

</script>

<template>
  <div class="login shadow-3">
    <div class="form box">
      <h4 class="text-h6 text-weight-medium text-capitalize text-bold ">Login</h4>
      <form @submit.prevent="login">
        <div class="q-gutter-md" style="max-width: 300px">
          <q-input color="deep-purple-6" filled v-model="text" class="text-body2" label="username" />
          <q-input v-model="password" filled class="text-body2" color="deep-purple-6" :type="isPwd ? 'password' : 'text'"
            label="password">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <q-btn type="submit" color="deep-purple-10" label="LOGIN" />
        </div>
      </form>
    </div>
    <div class="welcom box">
      <p>{{ content }}</p>
    </div>
  </div>
</template>
