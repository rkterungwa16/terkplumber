import thirdProps from "../data/thirdSection.json";
import { ThirdSection } from "types";

export function fetchThirdSectionData(): ThirdSection {
  return thirdProps as ThirdSection;
}
