<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="4">
        <h3>
          Filters
        </h3>
        <v-card>
          <v-container>
            <v-btn outlined color="primary" class="text-none">
              Meest relevant <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
            <v-checkbox
              hide-details
              v-model="showTypes.articles"
              label="Artikelen"
            />
            <v-checkbox
              hide-details
              v-model="showTypes.courses"
              label="Online cursussen"
            />
            <v-checkbox
              hide-details
              v-model="showTypes.inpersons"
              label="In-person cursussen"
            />
            </v-container>
            <expansionPanels/>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" v-if="!noRecords">
        <h3>Zoekresultaten voor {{ $route.query.search }}</h3>
        <v-card v-for="(item, i) in data" class="mb-5" :key="i">
          <v-row>
            <v-col cols="3">
              <v-img :src="item.image"></v-img>
            </v-col>
            <v-col cols="3">
              <h3>
                {{ item.title }}
              </h3>
            </v-col>
          </v-row>
        </v-card>
        <div></div>
      </v-col>
      <v-col v-else>
        Niks gevonden met de zoekterm "{{ $route.query.search }} "
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import expansionPanels from '../components/ExpansionPanels.vue'
export default {
  components: {
    expansionPanels
  },
  data() {
    return {
      data: null,
      noRecords: false,

      showTypes: {
        articles: true,
        courses: true,
        inpersons: true,
      },

    };
  },
  methods: {
    fetchData() {
      this.data = [];

      this.$http
        .get(process.env.VUE_APP_API + "/search/" + this.$route.query.search)
        .then((response) => {
          this.data = response.data;
          this.$store.state.loading = false;
        });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route() {
      //when searching and you are already on the route, fetch data again
      this.fetchData();
    },
    data(val) {
      //when search returns no results
      if (val.found === false) {
        this.noRecords = true;
      } else {
        this.noRecords = false;
      }
    },
  },
};
</script>
