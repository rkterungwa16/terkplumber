export type ThirdSection = {
  sec_three_title: string;
  skills: Skills[];
}

export type Skills = {
  title: string;
  competences: string;
  icon: string;
  iconAlt: string;
  details: Details[];
}

export type Details = {
  title: string;
  stack: string;
}
