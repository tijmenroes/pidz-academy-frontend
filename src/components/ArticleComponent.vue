<template>
  <v-card>
    <div v-if="home">
      <v-list v-for="(articleList, index) in articles" :key="index">
        <v-container>
          <h3>{{ articleList.theme }}</h3>
        </v-container>
        <v-list-item
          v-for="(article, i) in articleList.content"
          :key="i"
          :to="'artikelen/' + article._id"
        >
          <v-list-item-content>
            <v-list-item-title class="itemTitle">
              {{ article.title }} <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index < 1" />
      </v-list>
    </div>
    <v-list v-else>
      <v-list>
        <v-list-item
          v-for="(article, i) in articles"
          :key="i"
          :to="'artikelen/' + article._id"
        >
          <v-list-item-content>
            <v-list-item-title class="itemTitle">
              {{ article.title }} <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-list>
  </v-card>
</template>

<script>
export default {
  //Articles is the data, home is whether it's on homepage or not
  props: ["articles", "home"],
};
</script>

<style>
.itemTitle {
  white-space: normal !important;
}
</style>
