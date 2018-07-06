<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"/>
        </q-btn>
        <q-btn
          v-if="$route.name !== 'index'"
          flat
          dense
          round
          @click="$router.back()"
          aria-label="arrow_left"
        >
          <q-icon name="arrow_left"/>
        </q-btn>

        <q-toolbar-title @click.native="fetchMails">
          Mail reader
          <div slot="subtitle">v{{ $constants.version }}</div>
        </q-toolbar-title>

        <q-btn flat round icon="search" @click="promptSearch"></q-btn>
        <q-btn flat round icon="person" @click="promptUser"></q-btn>
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

    <dialog-search ref="modalUser" title="Utilisateur" subtitle="Utilisateur à rechercher" :default-text="currentUser"
                   @search="search" @update="updateCurrentUser"></dialog-search>
  </q-layout>
</template>

<script>

import { mailComputed, mailMethods, userMethods } from '../store/helper'
import DialogSearch from '../components/DialogSearch'

export default {
  name: 'LayoutDefault',
  components: {DialogSearch},
  created () {
    this.fetchFolders()
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      userSearch: ''
    }
  },
  computed: {
    ...mailComputed
  },
  methods: {
    ...mailMethods,
    ...userMethods,
    promptUser () {
      this.$refs.modalUser.show()
      // this.$q.dialog({
      //   title: 'Utilisateur',
      //   message: 'Choisir l\'utilisateur',
      //   prompt: {
      //     model: this.currentUser,
      //     type: 'text'
      //   },
      //   cancel: true,
      //   color: 'secondary'
      // }).then(data => {
      //   this.updateCurrentUser(data)
      // })
    },
    promptSearch () {
      this.$q.dialog({
        title: 'Recherche',
        message: 'Texte à rechercher',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        color: 'secondary'
      }).then(async data => {
        this.$q.loading.show()
        await this.searchMails(data)
        this.$q.loading.hide()
      })
    },
    async search (str, done) {
      this.$q.loading.show()
      const users = await this.searchUsers(str)
      done(users.map(u => ({value: u.userPrincipalName, label: u.userPrincipalName})))
      this.$q.loading.hide()
    }
  }
}
</script>

<style>
</style>
