import { FC } from "react";
import { NextApiRequest } from "next";
import { Home } from "../src/page-components";
import { Works, Posts, FirstSection, SecondSection, ThirdSection, FourthSection } from "types";

type Props = {
  works: Works[];
  posts: Posts[];
  data: [FirstSection, SecondSection, ThirdSection, FourthSection];
};

const HomePage: FC<Props> = ({ data }) => {
  const { start, name, occupation, summary } = data[0];
  const { secondSectionTitle, works } = data[1];
  const { thirdSectionTitle, posts } = data[2];
  const { invite, prompt } = data[3];

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
        posts={posts}
        invite={invite}
        prompt={prompt}
      />
    </>
  );
};

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  try {
    const protocol = process.env.PROTOCOL || "http";
    const host = req?.headers.host;

    const [firstRes, secondRes, thirdRes, fourthRes] = await Promise.all([
      fetch(`${protocol}://${host}/api/first_section`),
      fetch(`${protocol}://${host}/api/second_section`),
      fetch(`${protocol}://${host}/api/third_section`),
      fetch(`${protocol}://${host}/api/fourth_section`),
    ]);

    const firstSection = await firstRes.json();
    const secondSection = await secondRes.json();
    const thirdSection = await thirdRes.json();
    const fourthSection = await fourthRes.json();
    return {
      props: {
        data: [firstSection.data, secondSection.data, thirdSection.data, fourthSection.data],
      },
    };
  } catch (error) {
    console.error("Oops! Something went wrong..." + error);
    throw error;
  }
};

export default HomePage;
