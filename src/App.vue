<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Breaking Bad Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/logo.svg"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>

      <DarkTheme />

      <v-btn href="/" target="_blank" text>
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import DarkTheme from "./components/DarkTheme";

export default {
  name: "App",

  components: {
    Home,
    DarkTheme,
  },

  data: () => ({
    //
  }),
};
</script>
