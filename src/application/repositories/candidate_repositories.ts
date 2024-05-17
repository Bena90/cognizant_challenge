import { CandidateApi } from "../../data/api/candidate_api";
import { Candidate } from "../../dominio/entities/candidate";
import { ICandidatePresenter } from "../../dominio/presenters/candidate_presenter";

export class CandidateRepository implements ICandidatePresenter {
  _remoteApi: CandidateApi;

  constructor(remoteApi: CandidateApi) {
    this._remoteApi = remoteApi;
  }
  getCandidate(): Promise<Candidate[]> {
    return this._remoteApi.getCandidate();
  }
}
