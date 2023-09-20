import type { NextApiRequest, NextApiResponse } from "next";

import { fetchBlogFirstSectionData } from "services/blogFirstSection";

import { BlogFirstSection } from "types";

type Data = {
  data: BlogFirstSection;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: fetchBlogFirstSectionData(),
  });
}
