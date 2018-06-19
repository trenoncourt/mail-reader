<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>
          Mail reader
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Folders</q-list-header>
        <q-item v-for="(folder, key) in folders" :key="key" @click.native="fetchFolderMails(folder.id)">
          <q-item-side>{{folder.totalItemCount}}</q-item-side>
          <q-item-main :label="folder.displayName" :sublabel="'sub folders: ' + folder.childFolderCount"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import { mailComputed, mailMethods } from '../store/helper'

export default {
  name: 'LayoutDefault',
  created () {
    this.fetchFolders()
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods
  }
}
</script>

<style>
</style>
