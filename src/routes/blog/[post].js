import React, { lazy, Suspense } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout";

import data from '../../content/blog-posts.json';

const ScrollAnimations = lazy(() => import("../../components/ScrollAnimation"));

const BlogPost = () => {
  const { id } = useParams();

  const blogPostData =  data.find(item => item.id === id)

  return (
    <Layout>
      <h1>{blogPostData.title}</h1>
      <p>{blogPostData.desc}</p>
      <Suspense fallback={<React.Fragment />}>
        <ScrollAnimations />
      </Suspense>
    </Layout>
  )
}

export default BlogPost;
