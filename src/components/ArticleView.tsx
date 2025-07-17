import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { contentRegistry } from "../data/ContentReg";

export default function ArticleView() {
  const { slug } = useParams();

  const article = contentRegistry.find(item => item.slug === slug);

  if (!article) {
    return <main style={{ padding: "2rem" }}><h1>Article not found</h1></main>;
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>{article.title}</h1>
      <ReactMarkdown>{article.content}</ReactMarkdown>
    </main>
  );
}

