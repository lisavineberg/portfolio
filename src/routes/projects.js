import React from "react";
import Layout from "../components/Layout";
import List from "../components/List";

const items = [
  {
    title: "Mavi Jeans",
    subtitle: "Half Helix - HTML web components, Liquid",
    text: "Using Shopify’s platform, developed a new, easy-to-navigate website that scores high on accessibility and performance.",
    link: "https://mavi.com/"
  },
  {
    title: "Package Free",
    subtitle: "Half Helix - Gatsby, Nacelle, Vercel, Contentful CMS, styled components",
    text: "Built a headless site that interfaces with both Shopify for accounts and product data, and Contentful for page content.",
    link: "https://packagefreeshop.com/"
  },
  {
    title: "Marlow Pillow",
    subtitle: "Half Helix - HTML web components, Liquid",
    text: "Using Shopify's templating language Liquid, built a lightweight website with almost no dependencies.",
    link: "https://marlowpillow.com/"
  },
  {
    title: "Decoding Digital",
    subtitle: "AppDirect",
    text: "Built the entire homepage and episode pages for AppDirect’s new podcast, including a custom audio player and integrations with Craft CMS.",
    link: "https://www.appdirect.com/decoding-digital/homepage"
  },
  {
    title: "Add On Store",
    subtitle: "AppDirect",
    text: "Most notably, built a complex SVG animation for the landing page.",
    link: "https://addons.appdirect.com/en-US/home"
  },
  {
    title: "Crochet App",
    subtitle: "Personal project - React, FaunaDB, Netlify",
    text: "Working on an app to help with my knitting projects.",
    link: "https://hungry-wozniak-496878.netlify.app/"
  },

]

const Projects = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <List list={items} />
    </Layout>
  )
}

export default Projects;
