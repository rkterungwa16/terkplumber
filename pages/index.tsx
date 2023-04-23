import { FC } from "react";
import { GetServerSideProps, NextApiResponse } from "next";
import { Home } from "../src/page-components";
import { Skills } from "types";


type Props = {
  skills: Skills[];
}

const HomePage:FC<Props> = ({skills}) => {
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
      skills={skills}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
  query,
}) => {
  try {
    const protocol = process.env.PROTOCOL || "http";
    const host = req?.headers.host;
    const skillsRes = await fetch(`${protocol}://${host}/api/skills`);
const skillsResJson = await skillsRes.json();
    return {
      props: {

        skills: skillsResJson.data as Skills[],

      },
    };
  } catch (error) {
   console.error("Oops! Something went wrong..."+ error);
  }
};

export default  HomePage;


