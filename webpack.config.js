const path = require("path"); //Saber donde esta ubicado el proyecto
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //obj con la configuracion
  entry: "./src/index.js", //punto de entrada del proyecto
  //Donde vivira una vez compilado
  output: {
    path: path.resolve(__dirname, "dist"), //Path para q sea en la misma ubicacion y dist el nombre de la carpeta
    filename: "bundle.js", //Nombre del archivo compilado
    publicPath: "/",
  },
  mode: "development",
  //Las extensiones que se usaran
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@container": path.resolve(__dirname, "src/containers/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
      "@logos": path.resolve(__dirname, "src/assets/logos/"),
    },
  },
  //Las reglas de configuracion
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //nombre de la extension se hace con un REGEX
        exclude: /node_modules/, //Bobo si lee esta carpeta
        use: {
          loader: "babel-loader", //que use este loader para transformar el codigo
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  // Para que el servidor funcione correctamente en desarrollo
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3005,
  },
};
