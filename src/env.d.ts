/// <reference path="../.astro/types.d.ts" />
type ImportMetaEnv = {
  readonly PORT: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly SSR: boolean;
  readonly BASE_URL: string;
  readonly NODE_ENV: 'test' | 'production' | 'development';
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}