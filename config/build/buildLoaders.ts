import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const assetLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/images/[name].[hash][ext][query]",
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i, // Виключаємо модульні стилі
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      "sass-loader",
    ],
  };

  const scssModuleLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: "as-is",
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  // const tsLoader = {
  //   exclude: /node_modules/,
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: "ts-loader",
  //       options: {
  //         transpileOnly: true,
  //       },
  //     },
  //   ],
  // };

  const babelLoader = {
    test: /\.(m?js|tsx?)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
      },
    },
  };

  return [
    // Порядок об'єктів в масиві має значення
    assetLoader,
    cssLoader,
    scssLoader,
    scssModuleLoader,
    // tsLoader,
    babelLoader,
  ];
}
