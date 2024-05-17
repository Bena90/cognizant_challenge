export type Step =
  | "Entrevista inicial"
  | "Entrevista técnica"
  | "Oferta"
  | "Asignación"
  | "Rechazo";

export abstract class Candidate {
  id: string;
  name: string;
  step: Step;
  comments: string;

  constructor(id: string, name: string, step: Step, comments: string) {
    this.id = id;
    this.name = name;
    this.step = step;
    this.comments = comments;
  }
}
