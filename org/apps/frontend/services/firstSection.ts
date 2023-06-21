import firstProps from "../data/firstSection.json";
import { FirstSection } from "types";

export function fetchFirstSectionData(): FirstSection {
  return firstProps as FirstSection;
}
