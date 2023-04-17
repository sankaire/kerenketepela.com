import { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col  gap-12 bg-gray-800">
      <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Blogs 📖
      </h1>
      <div className="flex h-screen w-3/4  self-center">
        <span className="mx-auto text-2xl text-[hsl(280,100%,70%)]">
          comming soon🚀
        </span>
      </div>
    </div>
  );
};

export default Blog;
