import { useEffect } from "react";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | Alex Morgan · Senior Full Stack Software Engineer`
      : "Alex Morgan | Senior Full Stack Software Engineer (Java, PHP, MERN)";
    
    document.title = fullTitle;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag && description) {
      metaDescriptionTag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}

