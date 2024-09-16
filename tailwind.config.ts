import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "medium-purple": {
          "50": "#f6f4fe",
          "100": "#eeebfc",
          "200": "#dfdafa",
          "300": "#c9bcf6",
          "400": "#ad96ef",
          "500": "#9169e7",
          "600": "#824bdc",
          "700": "#7339c8",
          "800": "#5f2fa8",
          "900": "#4f288a",
          "950": "#31185d",
        },
        alabaster: {
          "50": "#f9f9f9",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
    },
  },
};
