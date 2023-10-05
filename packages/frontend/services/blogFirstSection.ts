import blogFirstProps from "../data/blogFirstSection.json";
import { BlogFirstSection } from "types";

export function fetchBlogFirstSectionData(): BlogFirstSection {
  return blogFirstProps as BlogFirstSection;
}
