import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        header: {
          name: "Oi",
        },
        main: {
          name: "Montserrat",
        },
      },
    }),
  ],
  shortcuts: {
    btn: "bg-orange-500 text-white px-8 py-2 hard-shadow hover:shadow-[2px_2px_0_0] active:(shadow-[0px_0px_0_0] brightness-90) transition duration-200",
    "hard-shadow":
      "shadow-[8px_8px_0_0] shadow-blue-950 border-blue-950 border-2 ",
    "text-header": "font-header text-4xl text-blue-950",
  },
});
