import { Home } from "../src/page-components";

export default function HomePage() {
  const summaryText = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ";
  const start = "My name is";
  const name = "Terungwa Kombol,";
  const occupation = "I'm a Software Developer.";
  return (
    <>
      <Home
      start={start}
      name={name}
      occupation= {occupation}
      summary={summaryText}
      />
    </>
  );
}
