export type TpVaccine = {
  title: string;
  name?: string;
};

export type TpInfection = {
  id: string;
  type?: 'inanimate' | 'animate';
  title: string;
  name?: string;
  vaccines: TpVaccine[];
  contraindications: unknown;
  reactionsAndComplications: unknown;
};

export type TpInfections = TpInfection[];
