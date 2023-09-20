import { FC } from "react";
import { Blog } from "../src/page-components";
import { BlogFirstSection } from "types";
import { NextApiRequest } from "next";

type blogProps = {
  data: [BlogFirstSection];
}
const BlogPage:FC<blogProps> = ({data}) => {
  const { blogDescription, subDescription } = data[0];
  return (
    <>
      <Blog
      blogDescription={blogDescription}
      subDescription={subDescription}
      />
    </>
  );
};

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  try {
    const protocol = process.env.PROTOCOL || "http";
    const host = req?.headers.host;

    const [blogFirstRes] = await Promise.all([
      fetch(`${protocol}://${host}/api/blog_first_section`),
    ]);

    const blogFirstSection = await blogFirstRes.json();
    return {
      props: {
        data: [blogFirstSection.data],
      },
    };
  } catch (error) {
    console.error("Oops! Something went wrong in the blog page..." + error);
    throw error;
  }
};

export default BlogPage;

