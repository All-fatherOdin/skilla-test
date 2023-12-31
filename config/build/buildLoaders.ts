import type webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {type BuildOptions} from "./types/config"

export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: "file-loader"
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: [{
      loader: "ts-loader"
    }],
    exclude: /node_modules/
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes(".module."),
            localIdentName: isDev ?
              "[local]--[hash:base64:8]" :
              "[hash:base64:8]"
          }
        }
      },
      "sass-loader"
    ]
  }

  return [
    tsLoader,
    scssLoader,
    fileLoader,
    svgLoader
  ]
}
