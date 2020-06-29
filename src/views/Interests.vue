<template>
  <v-container fluid fill-height fill-width>
    <v-card class="cardContainer">
      <v-card-title>
        <v-row class="offset-sm-1">
          <div>
            <h2>
              Welkom bij PIDZ academy, Tijmen Roes
            </h2>
          </div>
          <div>
            <h3>
              Vul je gegevens in zodat wij je een gepersonaliseerd aanbod kunnen
              bieden!
            </h3>
          </div>
          <div>
            <p>
              Deze gegevens worden alleen binnen PIDZ academy gebruikt, en
              worden dus niet doorverkocht aan een derde partij.
            </p>
          </div>
        </v-row>
      </v-card-title>
      <!--Interest dropdowns -->
      <v-row class="offset-sm-1">
        <v-col cols="6" lg="4">
          <v-autocomplete
            :items="experience"
            v-model="experienceModel"
            outlined
            chips
            deletable-chips
            label="Werkervaring"
            hint="meerder antwoorden mogelijk"
            multiple
          ></v-autocomplete>
        </v-col>
        <v-col cols="6" lg="4">
          <v-autocomplete
            :items="interests"
            v-model="interestsModel"
            outlined
            chips
            deletable-chips
            label="Interesses"
            multiple
          ></v-autocomplete>
        </v-col>

        <v-card-actions>
            <p>Deze interesses kunnen altijd worden aangepast bij je profiel instellingen</p>
          <v-btn outlined color="primary" class="text-none" :to="'/home'"> Sla over</v-btn>
          <v-btn color="primary" class="text-none ml-5" :to="'/home'" :disabled="disabled" > Sla interesses op</v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
      //Dropdown data
    return {
      interests: ["Accountancy", "Financiën", "Zelfontwikkeling", "Meditatie"],
      experience: [
        "Thuiszorg",
        "Ouderenzorg",
        "Ziekenhuizen",
        "EHBO",
        "Gehandicaptenzorg",
      ],
      interestsModel:null,
      experienceModel:null,
    };
  },
  computed : {
      disabled() {
          //disable button if nothing is selected
            if(!this.interestsModel && !this.experienceModel) {
                return true;
            } else {
                return false
            }
      }
  },
  created() {
    this.$store.state.loading = false;
  },
};
</script>

<style scoped>
.cardContainer {
  width: 100%;
  height: 100%;
}
.cardContainer div {
  display: block;
  padding-top: 24px;
}
</style>
