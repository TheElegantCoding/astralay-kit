import type { HTMLAttributes } from 'astro/types';

type ScrollComponentProps = HTMLAttributes<'div'> & {
  class?: string;
  orientation?: 'vertical' | 'horizontal';
};

export type { ScrollComponentProps };