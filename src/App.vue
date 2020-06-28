<template>
  <v-app id="inspire">
    <NavBar></NavBar>
    <v-main>
      <div v-if="$store.state.loading" class="text-center">
        <div class="text-center loading">
          <v-progress-circular
            :size="100"
            color="primary"
            class="my-auto"
            indeterminate
          ></v-progress-circular>
        </div>
      </div>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  watch: {
    $route() {
      this.$store.state.loading = true;
    },
  },
};
</script>

<style scoped>
.loading {
  position: absolute;
  bottom: 50%;
  left: 50%;
}
</style>
