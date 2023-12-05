import React from "react";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { LargeText } from "@/components/texts";
import remarkGfm from "remark-gfm";
import Markdown from "markdown-to-jsx";


const CodeComponent = ({ children, ...props }) => {

  return <div className="inline-block px-2 py-1 bg-bg1 max-w-screen-lg">
    <code className="bg-black-900 max-w-min text-bg1  flex" {...props}>{children}</code>

  </div>

}

const Post = async ({ params }: { params: { slug: string } }) => {
  const blog = params.slug;
  const BlogContent = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, {
    encoding: "utf-8",
  });

  const { data, content } = matter(BlogContent);
  console.log(data);
  return (
    <div className="blog max-w-screen-lg">
      <LargeText text={data.title} />
      <Markdown
        children={content}
        options={{
          overrides: {
            h1: {
              component: LargeText,
            },
            code: {
              component: CodeComponent
            }
          }
        }}
      />     </div>
  );
};

export default Post;
