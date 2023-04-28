import type { NextApiRequest, NextApiResponse } from "next";

import { fetchSecondSectionData } from "services/secondSection";

import { SecondSection } from "types";


type Data = {
  data: SecondSection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchSecondSectionData(),
  });
}
