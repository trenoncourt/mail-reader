<template>
  <q-list highlight inset-separator link>
    <mail-preview v-for="(mail, key) in mails" :key="key" :mail="mail"
                  @click.native="fetchMail(mail.id), fetchMailAttachments(mail.id), navigate()"
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
    ...mailMethods,
    navigate () {
      if (window.innerWidth < 600) {
        this.$router.push({name: 'mail'})
      }
    }
  }
}
</script>
