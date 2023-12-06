/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/PokeAPI/**",
      },
      {
        protocol: "https",
        hostname: "pokeapi.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
