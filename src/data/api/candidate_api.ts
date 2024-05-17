import axios from "axios";

import { CandidateModel } from "../../application/modals/candidate_modal";

export class CandidateApi {
  async getCandidate(): Promise<CandidateModel[]> {
    const response = await axios.get("./candidates.json");

    if (response.status === 200) {
      return response.data.map((candidate: { [key: string]: string }) =>
        CandidateModel.fromJson(candidate as unknown as { [key: string]: never }),
      );
    }

    return Promise.reject(new Error("Something went wrong!"));
  }
}
