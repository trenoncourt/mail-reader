<template>
  <q-page class="flex">
    <media :query="{minWidth: 600}">
      <div class="row">
        <div class="col-4" style="position: absolute;overflow-y: scroll; height: 100%;">
          <mail-list></mail-list>
        </div>
        <div class="col-8" style="position: absolute;overflow-y: scroll;height: 100%; right:0; width: 66.6667%;">
          <div class="q-ma-md" v-html="currentMailBody"></div>
        </div>
      </div>
    </media>
  </q-page>
</template>

<script>
import MailList from '../components/MailList'
import { mailComputed, mailMethods } from '../store/helper'
import Media from 'vue-media'

export default {
  name: 'PageIndex',
  components: {MailList, Media},
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods
  }
}
</script>
