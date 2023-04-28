import { FC, useState } from "react";
import { GetServerSideProps, NextApiResponse } from "next";
import { Home } from "../src/page-components";
import { Skills } from "types";
import { FirstSection, SecondSection, ThirdSection } from "types";

//{ id: number; name: string }[]
type Props = {
  skills: Skills[];
  data: [FirstSection, SecondSection, ThirdSection] ;
}

const HomePage:FC<Props> = ({data}) => {

const { start, name, occupation, summary } = data[0];
const { sec_two_title, details } = data[1];
const { sec_three_title, skills } = data[2];

  return (
    <>
      <Home
        start={start}
        name={name}
        occupation= {occupation}
        summary={summary}
        section_two_title={sec_two_title}
        my_details={details}
        section_three_title={sec_three_title}
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

    const firstRes = (await fetch(`${protocol}://${host}/api/first_section`)).json().then(res => res.data);
    const secondRes = (await fetch(`${protocol}://${host}/api/second_section`)).json().then(res => res.data);
    const thirdRes = (await fetch(`${protocol}://${host}/api/third_section`)).json().then(res => res.data);

    const promises: [Promise<FirstSection>, Promise<SecondSection>, Promise<ThirdSection>] = [firstRes, secondRes, thirdRes];
    const result = await Promise.all(promises).then((values)=> values);

    return {
      props: {
        data: result,
      },
    };
  } catch (error) {
   console.error("Oops! Something went wrong..."+ error);
  }
};

export default  HomePage;


