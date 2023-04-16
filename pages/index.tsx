import { Home } from "../src/page-components";

export default function HomePage() {
  const summaryText = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ";
  const start = "My name is";
  const name = "Terungwa Kombol,";
  const occupation = "I'm a Software Developer.";
  const section_two_title = "About Me";
  const my_details = ["Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
   "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."];
  const section_three_title = "My Skills";

  return (
    <>
      <Home
      start={start}
      name={name}
      occupation= {occupation}
      summary={summaryText}
      section_two_title={section_two_title}
      my_details={my_details}
      section_three_title={section_three_title}
      />
    </>
  );
}
