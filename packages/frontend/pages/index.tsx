import { FC } from "react";
import { NextApiRequest } from "next";
import { Home } from "../src/page-components";
import { Skills, Works } from "types";
import { FirstSection, SecondSection, ThirdSection } from "types";

type Props = {
  works: Works[];
  skills: Skills[];
  data: [FirstSection, SecondSection, ThirdSection];
};

const HomePage: FC<Props> = ({ data }) => {
  const { start, name, occupation, summary } = data[0];
  const { secondSectionTitle, works } = data[1];
  const { thirdSectionTitle, skills } = data[2];

  return (
    <>
      <Home
        start={start}
        name={name}
        occupation={occupation}
        summary={summary}
        secondSectionTitle={secondSectionTitle}
        works={works}
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

    const [firstRes, secondRes, thirdRes] = await Promise.all([
      fetch(`${protocol}://${host}/api/first_section`),
      fetch(`${protocol}://${host}/api/second_section`),
      fetch(`${protocol}://${host}/api/third_section`),
    ]);

    const firstSection = await firstRes.json();
    const secondSection = await secondRes.json();
    const thirdSection = await thirdRes.json();
    return {
      props: {
        data: [firstSection.data, secondSection.data, thirdSection.data],
      },
    };
  } catch (error) {
    console.error("Oops! Something went wrong..." + error);
    throw error;
  }
};

export default HomePage;
