import path from 'path'

export const publicDir = path.resolve(process.cwd(), 'public')
export const distDir = path.resolve(process.cwd(), 'dist')
export const modulesDir = path.resolve(process.cwd(), 'node_modules')
export const srcDir = path.resolve(process.cwd(), 'src')
export const assetsDir = path.resolve(path.join(publicDir, 'assets'))
