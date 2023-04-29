import { FC } from "react";
import { NextApiRequest } from "next";
import { Home } from "../src/page-components";
import { Skills } from "types";
import { FirstSection, SecondSection, ThirdSection } from "types";

type Props = {
  skills: Skills[];
  data: [FirstSection, SecondSection, ThirdSection];
};

const HomePage: FC<Props> = ({ data }) => {
  const { start, name, occupation, summary } = data[0];
  const { secondSectionTitle, details } = data[1];
  const { thirdSectionTitle, skills } = data[2];

  return (
    <>
      <Home
        start={start}
        name={name}
        occupation={occupation}
        summary={summary}
        secondSectionTitle={secondSectionTitle}
        myDetails={details}
        thirdSectionTitle={thirdSectionTitle}
        skills={skills}
      />
    </>
  );
};

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  try {
    const protocol = process.env.PROTOCOL || "http";
    const host = req?.headers.host;

    const firstRes = (await fetch(`${protocol}://${host}/api/first_section`))
      .json()
      .then((res) => res.data);
    const secondRes = (await fetch(`${protocol}://${host}/api/second_section`))
      .json()
      .then((res) => res.data);
    const thirdRes = (await fetch(`${protocol}://${host}/api/third_section`))
      .json()
      .then((res) => res.data);

    const promises: [
      Promise<FirstSection>,
      Promise<SecondSection>,
      Promise<ThirdSection>
    ] = [firstRes, secondRes, thirdRes];
    const result = await Promise.all(promises).then((values) => values);

    return {
      props: {
        data: result,
      },
    };
  } catch (error) {
    console.error("Oops! Something went wrong..." + error);
  }
};

export default HomePage;
