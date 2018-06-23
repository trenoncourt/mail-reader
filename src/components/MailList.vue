<template>
  <q-list highlight inset-separator link>
    <mail-preview v-for="(mail, key) in mails" :key="key" :mail="mail"
                  @click.native="fetchMailBody(mail.id)"
                  :class="{ 'bg-light': mail.id === currentMailId }"></mail-preview>
  </q-list>
</template>

<script>
import MailPreview from './MailPreview'
import { mailComputed, mailMethods } from '../store/helper'

export default {
  components: {MailPreview},
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods
  }
}
</script>
