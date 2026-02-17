
export enum Section {
  EXECUTIVE = 'executive',
  SECRETARY = 'secretary',
  STRUCTURE = 'structure'
}

export interface Personnel {
  id: string;
  name: string;
  position: string;
  roleDescription?: string;
  department: string;
  imageUrl?: string;
  level: 'policy' | 'executive' | 'administrative';
  period?: string;
  tags: string[];
  bio?: string;
  decorations?: string[];
}
