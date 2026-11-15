export type ToolCategory = 'Documents' | 'Media' | 'Developer' | 'Productivity';
export type ToolStatus = 'live' | 'beta' | 'coming-soon';

export interface ToolItem {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  url: string;
  icon: 'mdx' | 'imagix' | 'sparkles' | 'code';
  category: ToolCategory;
  tags: string[];
  status: ToolStatus;
  accentColor?: string;
}

