<template>
  <div>
    <v-app-bar color="accent-4" dark prominent>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item to="/"> Main </v-list-item>
          <v-list-item to="/about"> About </v-list-item>
          <v-list-item to="/login"> Login </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-card-text>
        <router-view></router-view>
      </v-card-text>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
