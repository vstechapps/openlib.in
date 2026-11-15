export type AppStatus = 'live' | 'beta' | 'coming-soon';
export type AppKind = 'Writing' | 'Creative' | 'Framework';

export interface AppItem {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  url: string;
  icon: 'mdx' | 'imagix' | 'code' | 'sparkles';
  kind: AppKind;
  tags: string[];
  status: AppStatus;
  accentColor?: string;
}
