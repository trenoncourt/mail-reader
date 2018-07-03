<template>
  <q-modal ref="dialogSearchModal" minimized>
    <div class="modal-header">{{title}}</div>
    <div class="modal-body modal-scroll modal-message" v-if="subtitle">{{subtitle}}</div>
    <div class="modal-body modal-scroll">
      <q-input :before="[{icon: 'search', handler () {}}]" v-model="searchText" autofocus color="secondary"
               @keyup.enter.native="$emit('update', searchText), $refs.dialogSearchModal.hide()">
        <q-autocomplete
          @search="search"
          :min-characters="3"
        />
      </q-input>
    </div>
    <div class="modal-buttons row">
      <q-btn inline flat color="secondary" @click="$refs.dialogSearchModal.hide()">cancel</q-btn>
      <q-btn inline flat color="secondary" @click="$emit('update', searchText), $refs.dialogSearchModal.hide()">ok
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
    },
    defaultText: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    searchText: ''
  }),
  methods: {
    show () {
      this.$refs.dialogSearchModal.show()
    },
    search (str, done) {
      console.log('search')
      this.$emit('search', str, done)
    }
  },
  created () {
    this.searchText = this.defaultText
  }
}
</script>
