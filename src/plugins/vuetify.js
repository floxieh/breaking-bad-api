import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: "#B2DFDB",
        secondary: "#124b3a",
        chip: "#000000",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
      dark: {
        primary: "red",
        secondary: "red",
      },
    },
  },
});
