import React from "react";
import List from "../components/List";

const ProjectsList = () => {
  const items = [
    {
      title: "Package Free",
      subtitle: "Half Helix - Gatsby, Nacelle, Vercel, Contentful CMS, styled components",
      text: "Built a headless site that interfaces with both Shopify for accounts and product data, and Contentful for page content."
    },
    {
      title: "Marlow Pillow",
      subtitle: "Half Helix - HTML web components, Liquid",
      text: "Using Shopify's templating language Liquid, built a lightweight website with almost no dependencies."
    },
    {
      title: "Decoding Digital",
      subtitle: "AppDirect",
      text: "Built the entire homepage and episode pages for AppDirect’s new podcast, including a custom audio player and integrations with Craft CMS."
    },
    {
      title: "Add On Store",
      subtitle: "AppDirect",
      text: "Most notably, built a complex SVG animation for the landing page."
    },
    {
      title: "Crochet App",
      subtitle: "Personal project - React, FaunaDB, Netlify",
      text: "Working on an app to help with my knitting projects."
    },

  ]
  return (
    <List list={items} />
  );
};

export default ProjectsList;
