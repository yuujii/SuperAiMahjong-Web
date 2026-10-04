import { registerHooks } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
registerHooks({ resolve(specifier, context, nextResolve) {
  if (specifier === 'next/server') return nextResolve('next/server.js', context);
  if (specifier.startsWith('@/')) return nextResolve(pathToFileURL(resolve(specifier.slice(2) + '.ts')).href, context);
  if (context.parentURL?.endsWith('.ts') && specifier.startsWith('.') && !/\.[cm]?[jt]sx?$/.test(specifier)) {
    return nextResolve(new URL(specifier + '.ts', context.parentURL).href, context);
  }
  return nextResolve(specifier, context);
}});
