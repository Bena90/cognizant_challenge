import { useEffect, useState } from "react";

import { Candidate } from "../../../types/candidate";

export const HomeViewModel = () => {
  const [candidates, setCandidates] = useState<Candidate[]>();

  const getCandidates = () => {};

  useEffect(() => {}, []);

  return {
    candidates,
  };
};
