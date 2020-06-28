<template>
  <v-col cols="12" md="10" class="offset-md-1">
    <v-card class="mb-5 ">
      <v-row>
        <v-col cols="12" md="2" class="">
          <v-img
            class="mx-auto"
            contain
            src="https://marente.nl/img/responsive/page/images/Thuiszorg.jpg"
          >
          </v-img>
        </v-col>
        <v-col cols="12" md="8">
          <v-container>
            <h3>{{ course.title }}</h3>
            <p class="desc">
              {{ course.desc }}
            </p>
          </v-container>
        </v-col>
        <v-col cols="12" md="2" align="center">
          <v-container>
            <v-btn
              color="primary"
              height="50px"
              class="text-none text-center mx-auto courseDate"
              lowercase
              contain
              depressed
              ><p>
                {{ course.day }}
                <br />
                <span class="dateMonth">
                  {{ course.month }}
                </span>
              </p>
            </v-btn>
          </v-container>

          <p color="primary" class="signUpBtn text-none">
            Eindhoven
          </p>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["course"],
};
</script>

<style scoped>
.courseDate p {
  display: block;
  position: absolute;
}

.courseDate .dateMonth {
  font-size: 12px;
}
.desc {
  opacity: 0.8;
}
.signUpBtn {
  display: block;
}
</style>
