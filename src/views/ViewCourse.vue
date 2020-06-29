<template>
  <div>
    <v-container fluid>
      <v-card v-if="!$store.state.loading">
        <v-breadcrumbs large :items="breadcrumbs" class="offset-md-1"></v-breadcrumbs>
        <v-row>
          <v-col cols="12" sm="4" class="offset-md-1 order-xs-1">
            <v-container>
              <h1>{{ data.title }}</h1>
              <p class="description">
                Een uitgebreide cursus over hoe je het beste kan omgaan met
                ouderen als professionele zorgverlener, dit is erg belangrijke
                in de huidige samenleving omdat wij niet lorem ipsum dolor vita
              </p>
              <v-btn color="primary" large depressed class=" mt-5 text-none">
                Start cursus</v-btn
              >
            </v-container>
          </v-col>

          <v-col sm="6" cols="12" class="order-sm-0 order-sm-0 order-first">
            <v-img :src="data.image" contain height="500px"></v-img>
          </v-col>
        <!--Section where all the course information is in a short way -->
          <v-col sm="8" xs="12" class="offset-sm-2">
            <v-card class="midsection">
            
            
              <v-row  align="center">
                <v-col v-for="item in courseInfo" cols="6"  md="3"  :key="item.text">
                  <v-row align="center" justify="center">
                    <v-col cols="2">
                      <v-icon large color="primary">{{ item.icon }}</v-icon>
                    </v-col>
                    <v-col cols="9">
                      <div class="flex-column">
                        <v-col cols="12" class="pb-0">
                          <h3>{{ item.text }}</h3>
                        </v-col>

                        <v-col cols="12" class="py-0">
                          <span class="infoValue">
                            {{ item.value }}
                          </span>
                        </v-col>
                      </div>
                    </v-col>
                    <v-divider vertical></v-divider>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
<!-- Tabs that decide what gets shown-->
        <v-row class="tabContainer mx-0 ">
          <v-col sm="8" class="offset-sm-2 pb-0">
            <v-row>
              <v-tabs
                v-model="tabIndex"
                background-color="transparent"
                slider-size="2"
                align-with-title
                color="primary"
                grow
              >
                <v-tab
                  v-for="tab in tabs"
                  color="black"
                  class="text-none"
                  :key="tab"
                >
                  <span>
                    {{ tab }}
                  </span>
                </v-tab>
              </v-tabs>
            </v-row>
          </v-col>
        </v-row>
        <v-tabs-items v-model="tabIndex">
          <v-tab-item
            v-for="tabItem in tabItems"
            :key="tabItem"
            :class="tabItem.class"
          >
            <v-col sm="8" class="offset-sm-1">
              <v-container class="tabContent">
                <h2>{{ tabItem.title }}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </v-container>
            </v-col>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
    <v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: null,
      breadcrumbs: [{ text: "Online Cursussen", href: "/online-cursussen" }],
      courseInfo: [
        { text: "Prijs", icon: "mdi-currency-eur", value: "3,-" },
        { text: "Duur", icon: "mdi-timer-sand", value: "8 uur" },
        { text: "Niveau", icon: "mdi-chart-line-variant", value: "5/10" },
        { text: "Rating", icon: "mdi-star", value: "4" },
      ],
      tabs: ["Omschrijving", "Wat ga je leren?", "Benodigheden", "Cursist"],
      tabItems: [
        {
          title: "Dit is de omschrijving van de cursus",
          class: "omschrijving",
        },
        { title: "In deze cursus ga je dit en dit leren", class: "leren" },
        { title: "Voor deze cursus heb je dit nodig", class: "benodigheden" },
        { title: "Dit is de cursist!", class: "omschrijving" },
      ],
      data: null,
    };
  },
  created() {
    this.$http
      .get(process.env.VUE_APP_API +"/courses/" + this.$route.params.id)
      .then((response) => {
        this.data = response.data;
        this.breadcrumbs.push({ text: response.data.theme, href: "/#" });
        this.$store.state.loading = false;
      });
  },
};
</script>

<style scoped>
.midsection {
  position: relative;
  top: -100px;
}
.description {
  font-size: 20px;
  opacity: 0.8;
}
.infoValue {
  font-weight: bold;
  font-size: 20px;
}
.tabContainer {
  background: #eef0f0;
}
.v-tab span {
  font-size: 18px;
  color: #142936;
}
</style>
