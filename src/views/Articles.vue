<template>
  <v-container fluid v-if="!$store.state.loading">
    <v-row>
      <v-col cols="12"  sm="6" class="offset-md-1">
        <h2>Uitgelichte artikelen</h2>
        <ArticleComponent :articles="data" />

        <h2 class="spacer">Ouderen zorg</h2>
        <v-card>
          <ArticleComponent :articles="JustInData" />
        </v-card>
         <h2 class="spacer">Ziekenhuizen</h2>
        <v-card>
          <ArticleComponent :articles="JustInData" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="offset-md-1 pl-5 pr-5">
      <h2>Net binnen</h2>
        <v-card>
          <ArticleComponent :articles="JustInData" />
        </v-card>
        <h2 class="spacer">PIDZ nieuws</h2>
        <v-card>
          <ArticleComponent :articles="JustInData" />
        </v-card>
        <h2 class="spacer">Vacatures</h2>
        <v-card>
          <ArticleComponent :articles="JustInData" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleComponent from "../components/ArticleComponent.vue";
export default {
  components: {
    ArticleComponent,
  },
  data() {
    return {
      data: null,
      JustInData:null,
    };
  },
  created() {
    this.$http.get("http://localhost:3000/articles/").then((response) => {
      this.data = response.data;
      this.$store.state.loading = false;
      this.JustInData = this.data.slice(3)
    });
  },
};
</script>

<style scoped>
.spacer {
  margin-top: 50px;
}
</style>
