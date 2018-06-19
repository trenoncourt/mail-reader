<template>
  <q-page class="flex">
    <div class="row">
      <div class="col-4">
        <mail-list></mail-list>
      </div>
      <div class="col">
        <div class="q-ma-mdc" v-html="currentMailBody"></div>
      </div>
    </div>
  </q-page>
</template>

<script>
import MailList from '../components/MailList'
import { mailComputed, mailMethods } from '../store/helper'

export default {
  name: 'PageIndex',
  components: {MailList},
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods
  }
}
</script>
