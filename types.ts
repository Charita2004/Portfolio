import { LucideIcon } from 'lucide-react';

export interface WorkTask {
  id: string;
  name: string;
  url: string;
}

export interface PortfolioModule {
  id: number;
  title: string;
  buttonLabel: string;
  buttonIconType: 'eye' | 'file' | 'chart' | 'link';
  tasks: WorkTask[];
}