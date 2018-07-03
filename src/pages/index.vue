<template>
  <q-page class="flex">
    <media :query="{minWidth: 600}">
      <div class="row">
        <div class="col-4" style="position: absolute;overflow-y: scroll; height: 100%;">
          <mail-list></mail-list>
        </div>
        <div class="col-8" style="position: absolute;overflow-y: scroll;height: 100%; right:0; width: 66.6667%;">
          <!--<div v-for="(ma, key) in currentMailAttachments" :key="key">-->
          <!--<a href="#" @click="downloadAttachment(ma)">{{ma.name}}</a>-->
          <!--</div>-->
          <div v-if="currentMail" class="q-ma-md">
            <mail></mail>
          </div>
        </div>
      </div>
    </media>
    <media :query="{maxWidth: 600}">
      <div class="row">
        <div class="col">
          <mail-list></mail-list>
        </div>
      </div>
    </media>
  </q-page>
</template>

<script>
import MailList from '../components/MailList'
import Mail from '../components/Mail'
import { mailComputed, mailMethods } from '../store/helper'
import Media from 'vue-media'

export default {
  name: 'PageIndex',
  components: {MailList, Media, Mail},
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods
  }
}
</script>
