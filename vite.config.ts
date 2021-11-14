import {cwd} from 'node:process';
import {join, basename} from 'node:path';
import {builtinModules} from 'node:module';
import {defineConfig} from 'vite';
import type {UserConfig} from 'vite';
import vitePurgeIconsPlugin from 'vite-plugin-purge-icons';
import {viteExternalsPlugin} from 'vite-plugin-externals';
import {name as packageName} from './package.json';

const builtinModulesNodeProtocol = builtinModules.map((value) => 'node:' + value);
const externalModules = [
  'electron',
  'electron-store',
  'steamid',
  'node-fetch',
  'markdown-it',
  'ini',
  'fs-extra',
];

export default function createConfig(packagePath: string) {
  return defineConfig(({mode}) => {
    const isDevelopment = mode === 'development';
    const rootPath = cwd();
    const viteDistName = basename(packagePath);
    const viteRoot = join(packagePath, 'src');
    const viteOutDirectory = join(packagePath, 'dist');
    const viteConfig: UserConfig = {
      root: viteRoot,
      base: '',
      envDir: rootPath,
      build: {
        target: 'esnext',
        emptyOutDir: true,
        outDir: viteOutDirectory,
        polyfillModulePreload: false,
      },
      plugins: [],
    };

    if (isDevelopment) {
      viteConfig.build!.minify = false;
    }

    if (viteDistName === 'render') {
      viteConfig.plugins?.push(
        viteExternalsPlugin({
          jquery: 'jQuery',
        }),
        vitePurgeIconsPlugin(),
      );
    }

    if (viteDistName === 'main' || viteDistName === 'preload') {
      viteConfig.build!.lib = {
        entry: join(viteRoot, 'index.ts'),
        name: packageName,
        formats: ['cjs'],
        fileName: () => 'index.js',
      };
      viteConfig.build!.rollupOptions = {
        external: [...externalModules, ...builtinModules, ...builtinModulesNodeProtocol],
      };
    }

    return viteConfig;
  });
}
