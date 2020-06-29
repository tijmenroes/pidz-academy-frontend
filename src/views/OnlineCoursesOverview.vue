<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <h2>
          Thema's
        </h2>
        <v-card>
          <v-container>
          <v-list>
            <v-list-item v-for="(theme, i) in themes" @click="filterData()" :key="i">
            {{theme}}
            </v-list-item>
          </v-list>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <h2 class="offset-sm-1">Financiën</h2>
        <Carrousel  :data="data"
                :cols="cols"
                :size="size"
                :amount="amount" />
      </v-col>
      <v-col cols="12" md="8" class="offset-sm-4">
        <h2 class="offset-sm-1">Thuiszorg</h2>
        <Carrousel  :data="data"
                :cols="cols"
                :size="size"
                :amount="amount" />
      </v-col>
      <v-col cols="12" md="8" class="offset-sm-4">
        <h2 class="offset-sm-1">Voor jezelf starten</h2>
        <Carrousel  :data="data"
                :cols="cols"
                :size="size"
                :amount="amount" />
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";

export default {
  components: {
    Carrousel,
  },
  data() {
    return {
      data: [],
      themes: ["Voor jezelf starten", "Thuiszorg", "Kinderen", "Planning tips", "Stress tips", "Lorem", "Ipsum", "Dolor"],
      size: "",
      amount: 0,
      cols: 0,
    };
  },
  watch: {
    size(size) {
      var amount;
      switch (size) {
        case "xl":
          amount = 3;
          break;
        case "lg":
          amount = 3;
          break;
        case "md":
          amount = 3;
          break;
        case "sm":
          amount = 1;
          break;
        case "xs":
          amount = 1;
          break;
      }
      this.amount = amount;
      this.cols = 12 / amount;
      //vuex should be used so it can be used in two components at once.
    },
  },
  methods: {
      filterData() {

      },
    sortData(data) {
      this.data = data.sort(function(a, b) {
        return a.theme - b.theme;
      });
      console.log(this.data);
    },
    onResize() {
      this.size = this.$vuetify.breakpoint.name;
    },
  },
  created() {
    this.$http.get(process.env.VUE_APP_API + "/courses/").then((response) => {
      //   this.data = response.data;
      this.$store.state.loading = false;
      //   this.JustInData = this.data.slice(3)
      window.addEventListener("resize", this.onResize, { passive: false });
      this.onResize()
      this.sortData(response.data);
    });
  },
};
</script>
