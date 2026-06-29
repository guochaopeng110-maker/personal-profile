export interface RepoLink {
  label: string;
  url: string;
  description?: string;
  role?: string;
}

export interface WorkflowStep {
  name: string;
  description: string;
  role: string;
}

export interface SchematicTrack {
  label: string;
  value: string;
  class?: string;
}

export interface VisualAsset {
  title: string;
  url?: string;
  description?: string;
  type?: 'image' | 'video' | 'diagram';
  schematic?: SchematicTrack[];
}

export interface Theme {
  title: string;
  summary: string;
  problem: string;
  role: string;
  solution: string;
  challenges: string[];
  results: string[];
  judgment: string;
  highlights: string[];
  repo?: {
    label: string;
    url: string;
  };
  repos?: RepoLink[];
  workflow?: {
    title: string;
    steps: WorkflowStep[];
  };
  visuals?: VisualAsset[];
}

