import type { NextApiRequest, NextApiResponse } from "next";

import { fetchFirstSectionData } from "services/firstSection";

import { FirstSection } from "types";

type Data = {
  data: FirstSection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchFirstSectionData(),
  });
}
