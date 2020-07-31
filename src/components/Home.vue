<template>
  <div>
    <Liste />
    <v-btn
      class="v-btn v-btn--bottom v-btn--contained v-btn--fab v-btn--fixed v-btn--right v-btn--round theme--dark v-size--large red"
      fab
      dark
      large
      color="cyan"
      @click="scrollToTop"
    >
      <v-icon dark>mdi-arrow-up-thick</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Liste from "./Liste";

export default {
  name: "Home",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  components: {
    Liste,
  },
};
</script>

<style></style>
