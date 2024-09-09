<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon, XIcon } from 'vue3-simple-icons'

const email = ref(null)
onMounted(() => {
  email.value.href = email.value.href.replace('$', '@')
})
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        title="Sink"
      >Sink</a>
      <a
        class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
        href="https://github.com/ccbikai/Sink"
        target="_blank"
        title="Sink"
      >
        Hellooo chat. Made using Sink. Sink is awesome.
      </a>
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          ref="email"
          href="mailto:vic$nosesisaid.com"
          title="Email"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Email</span>
          <GmailIcon
            class="w-6 h-6"
          />
        </a>


        <a
          href="https://x.com/vicjajsalu2"
          target="_blank"
          title="Twitter"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <XIcon
            class="w-6 h-6"
          />
        </a>
        <a
          href="https://github.com/v1ctorio"
          target="_blank"
          title="GitHub"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon
            class="w-6 h-6"
          />
        </a>
      </span>
    </div>
  </section>
</template>
