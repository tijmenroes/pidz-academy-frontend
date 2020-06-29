<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.mdAndUp"
      color="menu"
      app
    >
      <v-list dark>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="menu"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px"   color="menu" class="ml-0 pl-4">
        <span class="hidden-sm-and-down" >PIDZ</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        dark

        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Zoeken in alles"
        v-model="search"
        @keydown.enter="searchFunction"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-avatar size="32" class="ml-4">
        <v-img
          src="https://ak.picdn.net/shutterstock/videos/18363892/thumb/1.jpg"
        ></v-img>
      </v-avatar>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <span v-bind="attrs" v-on="on">
            <div>
              <span class="ml-4">
                Tijmen Roes
              </span>
              <v-icon>
                mdi-chevron-down
              </v-icon>
            </div>
          </span>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in prfileItems" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
    search: '',
    prfileItems: [
      "Verander interesses", "Uitloggen"
    ],
    items: [
      {
        icon: "mdi-home",
        text: "Home",
        path: "/home",
      },
      {
        icon: "mdi-school-outline",
        text: "Online cursussen",
        path: "/online-cursussen",
      },
      {
        icon: "mdi-account",
        text: "In-person cursussen",
        path: "/in-person-cursussen",
      },
      { icon: "mdi-newspaper-variant", text: "Artikelen", path: "/artikelen" },
    ],
  }),
methods: {
    searchFunction() {
      this.$router.push({path: 'search', query: {search: this.search}})
    }
  }
  
};
</script>
