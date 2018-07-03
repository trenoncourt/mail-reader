<template>
  <div class="row">
    <div class="col-12">From: {{from}}</div>
    <div class="col-12">To: {{to}}</div>
    <div class="col-12" v-if="cc">Cc: {{cc}}</div>
    <div class="col-12" v-if="bcc">Bcc: {{bcc}}</div>
    <div class="col-3 gutter-sm" v-for="(ma, key) in currentMailAttachments" :key="key">
      <q-card class="q-ma-md">
        <q-card-title>
          {{ma.name}}
        </q-card-title>
        <q-card-actions>
          <q-btn flat color="primary" icon="cloud_download" @click="downloadAttachment(ma)"/>
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-12">
      <div class="q-ma-md" v-html="currentMail.body.content"></div>
    </div>
  </div>
</template>

<script>
import { mailComputed, mailMethods } from '../store/helper'

export default {
  name: 'PageIndex',
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods
  }
}
</script>
