import { useEffect } from "react";
import { personalInfo } from "../../data/portfolioData";

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${personalInfo.name} · ${personalInfo.title}`
      : `${personalInfo.name} | ${personalInfo.title} (Java, PHP, MERN & AI)`;
    
    document.title = fullTitle;

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag && description) {
      metaDescriptionTag.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
