<template>
  <div>
    <v-container fluid class="pa-5"   v-if="!$store.state.loading" >
      <v-row>
        <v-col cols="12" lg="8" class="order-sm-first">
          <v-row>
            <v-col lg="12">
              <carrousel
                :data="continueCourseData"
                :cols="cols"
                :size="size"
                :amount="amount"
              />
            </v-col>

            <v-col cols="12" lg="12">
              <InPersonCourses v-for="(course,i) in InPerson" :key="i" :course="course"/>
            </v-col>
            <v-col lg="12">
              <carrousel
                :data="trendingCourseData"
                :cols="cols"
                :size="size"
                :amount="amount"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="order-first" lg="4">
          <v-container>
            <h2>Artikelen voor jou geselecteerd</h2>
            <ArticleComponent :articles="articles" :home="true" />
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel.vue";
import InPersonCourses from "../components/InPersonSelected.vue";
import ArticleComponent from "../components/ArticleComponent.vue";
export default {
  name: "Overview",
  components: {
    Carrousel,
    InPersonCourses,
    ArticleComponent
  },
  props: {
    source: String,
  },
  created() {
    //get data
    this.$http.get(process.env.VUE_APP_API + '/overview/').then((response) => {
      this.continueCourseData = response.data.progress;
      this.trendingCourseData = response.data.trending;
      this.$store.state.loading = false;
    })
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: false });
  },
  watch: {
    //set size for the carrousels
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
    },
  },
  methods: {
    onResize() {
      //when window resizes, check the size again
      this.size = this.$vuetify.breakpoint.name;
    },
  },
  data: () => ({
    size: "",
    amount: 0,
    cols: 0,
    articles: [{"theme": "Thuiszorg", "content": 
     [ {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 1},
    {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 2},
    {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id":3},
    {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 4},
    ]},
    {"theme": "Thuiszorg", "content": 
     [{"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 5},
    {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 6},
    {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 7},
    {"title": "Thuiszorgers krijgen nu nog meer te maken met corona crisis, dit komt omdat...", "id": 8},
    ]}],
    InPerson: [
      {
        title: "Dit is hoe je omgaat met ouderen!",
        day: 12,
        month: "Juni",
        desc: "in deze cursus ga je leren hoe je dit en dat doet"
      },
      {
        title: "Zo moet dat nou, omgaan met ouderen!",
        day: 12,
        month: "Juni",
        desc: "in deze cursus ga je leren hoe je dit en dat doet"
      },
    ],
    continueCourseData: [],
    trendingCourseData: []
  }),
};
</script>

