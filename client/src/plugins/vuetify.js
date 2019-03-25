import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  iconfont: "mdi",
  theme: {
    primary: "#009688",
    secondary: "#00bcd4",
    accent: "#e91e63",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2196f3",
    success: "#4caf50"
  }
});
