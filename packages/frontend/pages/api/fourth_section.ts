import type { NextApiRequest, NextApiResponse } from "next";

import { fetchFourthSectionData } from "services/fourthSection";

import { FourthSection } from "types";

type Data = {
  data: FourthSection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchFourthSectionData(),
  });
}
