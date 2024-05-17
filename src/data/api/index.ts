import { Candidate } from "../../dominio/entities/candidate";

export default {
  candidates: {
    list: (): Promise<Candidate[]> => Promise.resolve([]),
  },
};
