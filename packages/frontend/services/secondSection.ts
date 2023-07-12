import secondProps from "../data/secondSection.json";
import { SecondSection } from "types";

export function fetchSecondSectionData(): SecondSection {
  return secondProps as SecondSection;
}
