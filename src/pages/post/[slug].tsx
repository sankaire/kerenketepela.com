import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

export default function PostPage({
  frontmatter,
  content,
  prevPost,
  nextPost,
}: any) {
  return (
    <main className="min-h-screen bg-gray-600 p-4">
      <div className="prose mx-auto">
        <Link className="text-3xl text-white" href="/">
          Kerenke
        </Link>
        <h1 className="text-5xl font-extrabold tracking-tight text-[hsl(280,100%,70%)] sm:text-[5rem]">
          {frontmatter.title}
        </h1>
        <h4>{frontmatter.date}</h4>
        <div
          className="font-mono text-white"
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
        <hr />
        <div className="mt-8 flex justify-between">
          {prevPost && (
            <Link
              className="text-xl text-[hsl(280,100%,70%)] no-underline hover:underline"
              href={`/post/${prevPost.slug}`}
            >
              Previous Post - {prevPost.frontmatter.title} ⏪
            </Link>
          )}
          {nextPost && (
            <Link
              className=" text-xl  text-[hsl(280,100%,70%)] no-underline hover:underline"
              href={`/post/${nextPost.slug}`}
            >
              Next Post - {nextPost.frontmatter.title} ⏭️
            </Link>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/sankaire"
            className="p-4 text-3xl text-white"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/tepela2"
            className="p-4 text-3xl text-white"
          >
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("src/posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
const getAllPosts = () => {
  const files = fs.readdirSync("src/posts");
  return files.map((file) => {
    const slug = file.replace(".md", "");
    const fileName = fs.readFileSync(`src/posts/${file}`, "utf-8");
    const { data: frontmatter } = matter(fileName);
    return {
      slug,
      frontmatter,
    };
  });
};
export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`src/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return {
    props: {
      frontmatter,
      content,
      prevPost,
      nextPost,
    },
  };
}
