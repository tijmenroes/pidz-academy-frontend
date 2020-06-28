<template>
  <v-expansion-panels flat>
    <v-expansion-panel v-for="panel in expansionPanels" :key="panel.title">
      <v-expansion-panel-header>{{ panel.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <div v-if="panel.type === 'slider'">
          <v-slider
            :min="panel.min"
            :max="panel.max"
            v-model="ratingSlider"
            :prepend-icon="panel.icon"
          >
          </v-slider>
          Laat alles zien met een rating van {{ ratingSlider }}+
        </div>
        <div v-else-if="panel.type === 'range'">
          <v-range-slider
            :min="panel.min"
            :max="panel.max"
            v-model="levelSlider"
            :prepend-icon="panel.icon"
          >
          </v-range-slider>
          Laat alles zien tussen niveau {{ levelSlider[0] }} en
          {{ levelSlider[1] }}
        </div>
        <div v-else-if="panel.type === 'eurorange'">
          <v-range-slider
            :min="panel.min"
            :max="panel.max"
            v-model="euroSlider"
            :prepend-icon="panel.icon"
          >
          </v-range-slider>
          Laat alles zien tussen €{{ euroSlider[0] }} en €{{ euroSlider[1] }}
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      ratingSlider: 3,
      euroSlider: [0, 200],
      levelSlider: [1, 10],
      expansionPanels: [
        { title: "Rating", type: "slider", min: 0, max: 5, icon: "mdi-star" },
        {
          title: "Niveau",
          type: "range",
          min: 0,
          max: 10,
          icon: "mdi-chart-line-variant",
        },
        {
          title: "Prijs",
          type: "eurorange",
          min: 0,
          max: 200,
          icon: "mdi-currency-eur",
        },
      ],
    };
  },
};
</script>
