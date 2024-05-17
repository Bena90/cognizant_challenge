import { CandidateRepository } from "../../application/repositories/candidate_repositories";
import { CandidateApi } from "../../data/api/candidate_api";
import { Candidate, Step } from "../entities/candidate";
import { ICandidatePresenter } from "../presenters/candidate_presenter";

interface GetCandidateUseCaseResponse {
  initialInterview: Candidate[];
  technicalInterview: Candidate[];
  offer: Candidate[];
  assignment: Candidate[];
  rejection: Candidate[];
}

export class GetCandidateUseCase {
  private readonly _candidateRepository: ICandidatePresenter;

  constructor() {
    this._candidateRepository = new CandidateRepository(new CandidateApi());
  }

  async execute(): Promise<GetCandidateUseCaseResponse> {
    const candidates = await this._candidateRepository.getCandidate();

    if (!candidates) return Promise.reject(Error("No candidates"));

    const initialInterview: Candidate[] = [];
    const technicalInterview: Candidate[] = [];
    const offer: Candidate[] = [];
    const assignment: Candidate[] = [];
    const rejection: Candidate[] = [];

    return {
      initialInterview,
      technicalInterview,
      offer,
      assignment,
      rejection,
    };
  }

  private sortCandidates(step: Step): Candidate[] {
    return [];
  }
}
