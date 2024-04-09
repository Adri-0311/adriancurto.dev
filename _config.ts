import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
  src: "./src",
  dest: "./build",
})
  .use(favicon())
  .use(picture())
  .use(transformImages())
  .use(jsx({ extensions: [".jsx", ".tsx"] }))
  .use(
    tailwindcss({
      extensions: [".html", ".jsx"],
      options: {
        theme: {
          fontFamily: {
            sans: ["Electrolize", "Oxanium"],
          },
          extend: {
            keyframes: {
              typing: {
                "0%": { width: "0%" },
                "100%": { width: "125px" },
              },
              "blink-caret": {
                "0%, 100%": { opacity: "0" },
                "50%": { opacity: "1" },
              },
              'opacity-out':{
                "0%, 90%": { opacity: "0" },
                "100%": { opacity: "1" }
              }
            },
            animation: {
              typing: "typing 1s steps(20, end)",
              "blink-caret": "blink-caret 0.75s step-end infinite",
              "opacity-out": "opacity-out 1.75s ease-out"
            },
          },
        },
      },
    }),
  )
  .use(postcss())
  .copy("static");

export default site;
