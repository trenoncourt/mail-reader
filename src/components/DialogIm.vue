<template>
  <q-modal ref="dialogImModal" minimized>
    <div class="modal-header">{{title}}</div>
    <div class="modal-body modal-scroll modal-message" v-if="subtitle">{{subtitle}}</div>
    <div class="modal-body modal-scroll">
      <q-input float-label="sender" :before="[{icon: 'search', handler () {}}]" v-model="sender" autofocus color="secondary">
        <q-autocomplete
          @search="search"
          :min-characters="3"
        />
      </q-input>
      <q-input float-label="to" :before="[{icon: 'search', handler () {}}]" v-model="to" autofocus color="secondary">
        <q-autocomplete
          @search="search"
          :min-characters="3"
        />
      </q-input>
    </div>
    <div class="modal-buttons row">
      <q-btn inline flat color="secondary" @click="$refs.dialogImModal.hide()">cancel</q-btn>
      <q-btn inline flat color="secondary" @click="$emit('imSearch', {sender, to}), $refs.dialogImModal.hide()">ok
      </q-btn>
    </div>
  </q-modal>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    sender: '',
    to: ''
  }),
  methods: {
    show () {
      this.$refs.dialogImModal.show()
    },
    search (str, done) {
      this.$emit('search', str, done)
    }
  },
  created () {
  }
}
</script>
