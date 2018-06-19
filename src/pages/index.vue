<template>
  <q-page class="flex">
    <div class="row">
      <div class="col-4">
        <mail-list></mail-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import MailList from '../components/MailList'
import { mailMethods } from '../store/helper'

export default {
  name: 'PageIndex',
  components: {MailList},
  methods: {
    ...mailMethods
  }
}
</script>
