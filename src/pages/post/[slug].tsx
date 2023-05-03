import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export default function PostPage({ frontmatter, content }: any) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
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
export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`src/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
