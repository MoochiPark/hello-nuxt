<script setup lang="ts">
import User from "@/componets/User.vue";
import AppContainer from "~/componets/AppContainer.vue";
import {useGitHubUser} from "~/composables/github";
import Messages from "~/componets/Messages.vue";
import NewMessage from "~/componets/NewMessage.vue";

const user = await useGitHubUser()

useMeta({
  title: "WiSoft.io"
})
</script>

<template>
  <AppContainer>
    <div>
      <!--    <NuxtWelcome />-->
      <h1 class="text-4xl flex gap-2 items-center">
        WiSoft.io
        <i class="i-carbon-chat"/>
      </h1>
      <User :user="user"/>

      <NewMessage v-if="user"/>
      <Messages v-if="user"/>
    </div>
  </AppContainer>
</template>
