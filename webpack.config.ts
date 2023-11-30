import path from "path"
import type webpack from "webpack"
import {buildWebpackConfig} from "./config/build/buildWebpuckConfig"
import {type BuildEnv, type BuildPaths} from "./config/build/types/config"

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    devServer: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src")
  }

  const mode = env.mode || "development"
  const isDev = mode === "development"
  const port = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  })
  return config
}