<template>
  <q-list highlight inset-separator>
    <mail-preview v-for="(mail, key) in mails" :key="key" :mail="mail"></mail-preview>
  </q-list>
</template>

<script>
import MailPreview from './MailPreview'
import { mailComputed } from '../store/helper'

export default {
  components: {MailPreview},
  computed: {
    ...mailComputed
  }
}
</script>
