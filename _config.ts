import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
  src: "./src",
  dest: "./build",
})
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
        },
      },
    }),
  )
  .use(postcss())
  .copy("static");

export default site;
