<template>
  <div>
    <v-row align="baseline" justify="center">
      <v-col sm="1" class="d-none d-sm-flex">
        <v-icon size="50px" color="primary" v-if="model > 0" @click="model--">
          mdi-chevron-left
        </v-icon>
      </v-col>

      <v-col cols="12" sm="10" class="pt-0">
        <v-carousel
          :touch="{left: leftSwipe, right: rightSwipe}"
          :show-arrows="false"
          hide-delimiters
          hide-delimiter-background
          v-model="model"
          height="100%"
        >
          <v-carousel-item v-for="(abc, i) in sheets" :key="i">
              <v-row>
                <v-col
                  v-for="(item, index) in displayData"
                  :key="index"
                  :cols="cols"
                  class="pt-0"
                >
                  <v-card height="370px" light :to="'courses/' + item._id">
                    <v-img src="https://cnet1.cbsistatic.com/img/-B3kmqxu8sB6pYlTVZqRF9_cJB0=/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg" height="150px"></v-img>
                    <v-card-title
                      ><h5>{{ item.title }}</h5></v-card-title
                    >
                    <v-card-subtitle>{{ item.company }}</v-card-subtitle>

                    <v-card-actions class="actions">
                      <v-row no-gutters>
                        <v-col cols="12" class="pl-4" v-if="item.rating">
                          <p>
                            {{ item.rating.val }}
                          </p>
                          <v-rating
                            background-color="primary"
                            color="primary"
                            disabled
                            half-increments
                            readonly
                            :value="item.rating.val"
                            size="16"
                            class="pl-2 pr-2 rating"
                          ></v-rating>
                          <p>({{ item.rating.amount }})</p>
                        </v-col>
                        <v-col cols="12" class="pl-4" align="center" v-else>
                          <v-progress-linear
                            height="10"
                            :value="item.started.percentage"
                            rounded
                            color="primary"
                          ></v-progress-linear>
                          <p class="mt-5">
                            {{ item.started.percentage }}% voltooid
                          </p>
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col sm="1" class="d-none d-sm-flex">
        <v-icon size="50px"  v-if="position + amount < total" @click="model++" color="primary">
          mdi-chevron-right
        </v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["data", "cols", "size", "amount"],
  data() {
    return {
      displayData: [],
      model: 0,
    };
  },
  watch: {
    model() {
      this.setData();
    },
    cols() {
      this.setData();
    },
  },
  methods: {
    leftSwipe() {
      console.log(this.model)
      console.log(this.amount)
      if(this.model < this.amount) {
        // this/
        console.log('doing');
        this.model++
      }
      console.log(this.model)
      console.log('left')
    },
    rightSwipe(){
      if (this.model > 0) {
        console.log('doing');
        this.model--;
      }
      console.log('right')
    },
    setData() {
      if (this.data.length > this.amount) {
        var end;
        var amount;
        if (this.model == 0) {
          end = this.model + 1;
          amount = this.data.slice(this.model, this.amount);
        } else {
          var start = this.model * this.amount;
          end = start + this.amount;
          amount = this.data.slice(start, end);
        }
        this.displayData = amount;
      } else {
        this.displayData = this.data;
      }
      console.log("data set");
    },
  },
  computed: {
    sheets() {
      return Math.round(this.data.length / this.amount);
    },
    position() {
      return this.model * this.amount
    },
    total() {
      return this.sheets * this.amount
    }
  },
  created() {
    console.log("hi");
    console.log(this.cols);
    console.log(this.data.length)
    this.setData();
  },
};
</script>

<style scoped>
.actions {
  position: absolute;
  bottom: 0;
  width: 90%;
}
.rating,
p {
  display: inline-block;
}
</style>
