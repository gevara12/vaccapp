import { DocumentRendererProps } from '@keystatic/core/renderer';

export type TpVaccine = {
  title: string;
  name: string;
  slug: string;
  isAnimate: 'animate' | 'inanimate';
};

export type TpInfection = {
  id: string;
  type?: 'inanimate' | 'animate';
  title: string;
  name?: string;
  vaccines: TpVaccine[];
  contraindications: DocumentRendererProps;
  reactionsAndComplications: DocumentRendererProps;
};

export type TpInfections = TpInfection[];
