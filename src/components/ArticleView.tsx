import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleView() {
  const { slug } = useParams();

  // TODO: load article content dynamically here based on slug
  return (
    <main style={{ padding: "2rem" }}>
      <h1>{slug}</h1>
    </main>
  );
}

