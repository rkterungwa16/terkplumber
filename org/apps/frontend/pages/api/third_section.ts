import type { NextApiRequest, NextApiResponse } from "next";

import { fetchThirdSectionData } from "services/thirdSection";

import { ThirdSection } from "types";

type Data = {
  data: ThirdSection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchThirdSectionData(),
  });
}
