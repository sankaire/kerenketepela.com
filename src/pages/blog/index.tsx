import { NextPage } from "next";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

const Blog: NextPage = ({ posts }: any) => {
  return (
    <div className="flex min-h-screen flex-col  gap-12 bg-gray-600">
      <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Blogs 📖
      </h1>
      <div className="mb-4 flex h-screen w-3/4 flex-col gap-12 self-center">
        {posts.map(({ slug, frontmatter }: any) => (
          <div key={slug} className="mx-auto text-2xl text-[hsl(280,100%,70%)]">
            <Link href={`/post/${slug}`}>
              <h1 className=" text-[hsl(280,100%,70%)]">{frontmatter.title}</h1>
              <p className="text-sm text-white">{frontmatter.description}</p>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("src/posts");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`src/posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
