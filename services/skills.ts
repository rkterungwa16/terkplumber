import skills from "../data/skills.json";
import { Skills } from "types";

export function fetchSkills(): Skills[] {
  return skills as Skills[];
}
