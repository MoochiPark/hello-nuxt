<script setup lang="ts">
import {gitHubLogin, gitHubLogout} from "~/composables/github";

defineProps({
  user: {
    type: Object,
    required: true,
  }
})

const login = gitHubLogin
const logout = gitHubLogout
</script>

<template>
  <div>
    <div v-if="user"
         class="inline-flex items-center gap-2 p-5 bg-light-200">
      <img :src="user.avatar_url" class="rounded full w-10 h-10 mr-2">
      <p>Welcome {{ user.login }}</p>
      <button @click="logout" class="border text-black border-gray-600 rounded px-2 hover:border-black">
        Logout
      </button>
    </div>
    <div v-else>
      <button @click="login" class="border text-black border-gray-600 rounded px-2 hover:border-black">
        Login with GitHub
      </button>
    </div>
  </div>
</template>

