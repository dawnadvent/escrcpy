/** 在主进程中获取项目打包状态并将该值存储到环境变量中，从而在预加载脚本中及渲染进程中使用 */
/** 注意： app.isPackaged 可能被被某些方法改变所以请将该文件放到 main.js 必须位于非依赖项的顶部 */

import { app } from 'electron'

process.env.IS_PACKAGED = JSON.stringify(app.isPackaged)
