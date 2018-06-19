<template>
  <q-item multiple>
    <q-item-main
      :label="mail.subject"
      label-lines="1"
      :sublabel="mail.bodyPreview"
      sublabel-lines="2"
    />
    <q-item-side right>
      <q-item-tile stamp>{{mail.receivedDate}}</q-item-tile>
    </q-item-side>
  </q-item>
</template>

<script>
export default {
  props: {
    mail: Object
  }
}
</script>
