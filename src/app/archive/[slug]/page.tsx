import React from "react";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { LargeText } from "@/components/texts";
import remarkGfm from "remark-gfm";

const Post = async ({ params }: { params: { slug: string } }) => {
  const blog = params.slug;
  const BlogContent = fs.readFileSync(`${process.cwd()}/content/${blog}.md`, {
    encoding: "utf-8",
  });

  const { data, content } = matter(BlogContent);
  
  return (
    <div className="blog">
      <LargeText text={data.title} />
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
    </div>
  );
};

export default Post;
