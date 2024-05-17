import { Candidate, Step } from "../../dominio/entities/candidate";
import { CandidateAdapter } from "../adapters/candidate_adapter";

export class CandidateModel implements Candidate {
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

  static fromJson(json: { [key: string]: never }): CandidateModel {
    return new CandidateModel(
      json[CandidateAdapter.id] ?? "N/A",
      json[CandidateAdapter.name] ?? "N/A",
      json[CandidateAdapter.step] ?? "N/A",
      json[CandidateAdapter.comments] ?? "N/A",
    );
  }
}
