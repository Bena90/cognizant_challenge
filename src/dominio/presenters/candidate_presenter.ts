import { Candidate } from "../entities/candidate";

export abstract class ICandidatePresenter {
  abstract getCandidate(): Promise<Candidate[]>;
}
