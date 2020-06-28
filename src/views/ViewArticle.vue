<template>
  <v-container fluid>
    <v-card v-if="!$store.state.loading">
      <v-breadcrumbs large :items="breadcrumbs"></v-breadcrumbs>
      <v-row>
        <v-col cols="12" sm="6" class="offset-sm-2">
          <v-img :src="data.image"></v-img>
          <v-row>
            <v-col cols="10">
              <v-container>
                <h1>{{ data.title }}</h1>
                <p>{{ data.date }}</p>
              </v-container>
            </v-col>
          </v-row>
          <v-container fluid>
            <p color="primary" v-for="(paragraph, i) in data.body" :key="i">
              {{ paragraph.text }}
            </p>

            <h3>Geraleteerde artikelen</h3>
            <v-row>
              <v-col v-for="item of related" cols="4" :key="item.title">
                <v-card height="350px">
                  <v-img height="120" :src="item.image" />
                  <v-card-title>
                      {{ item.title }}
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <h3>Net binnen</h3>

          <p v-for="item of justIn" :key="item" class="justIn">
            {{ prettifyDate(item.date) }} - {{ item.title }}
            <v-divider></v-divider>
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [{ text: "artikelen", href: "/#/artikelen/" }],
      loading: true,
      data: null,
    };
  },
  methods: {
    prettifyDate(date) {
      date = new Date(date);
      var day = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var months = [
        "Januari",
        "Februari",
        "Maart",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "December",
      ];
      var monthtxt = months[month];
      return day + " " + monthtxt + " " + year;
    },
  },
  created() {
    this.$http
      .get(process.env.VUE_APP_API + "/articles/" + this.$route.params.id)
      .then((response) => {
        this.data = response.data.article;
        this.related = response.data.related;
        this.justIn = response.data.justIn;
        var date = this.prettifyDate(this.data.date);
        this.data.date = date;

        this.$store.state.loading = false;
        this.breadcrumbs.push({
          text: response.data.theme,
          href: "/#/artikelen/" + response.data.theme,
        });
      });
  },
};
</script>

<style scoped>
p {
  color: #1b538e;
}
.justIn {
  color: initial;
}
</style>
