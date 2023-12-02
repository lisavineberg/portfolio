import React, { lazy, Suspense } from "react";
import { useParams } from "react-router";
import Layout from "../../components/Layout";

import data from '../../content/blog-posts.json';

const ScrollAnimation = lazy(() => import("../../blog-content/ScrollAnimation"));
const PopoverApi = lazy(() => import("../../blog-content/PopoverApi"))
const DiscreteAnimations = lazy(() => import("../../blog-content/DiscreteAnimations"))

const Posts = [
  {
    title: "scroll-driven-animations",
    import: ScrollAnimation
  },
  {
    title: "popover-api",
    import: PopoverApi
  },
  {
    title: "discrete-animations",
    import: DiscreteAnimations
  }
]

const BlogPost = () => {
  const { id } = useParams();

  const blogPostData =  data.find(item => item.id === id)
  const Component = Posts.find(post => post.title === id).import

  return (
    <Layout>
      <h1>{blogPostData.title}</h1>
      <p>{blogPostData.desc}</p>
      <Suspense fallback={<React.Fragment />}>
        <Component></Component>
      </Suspense>
    </Layout>
  )
}

export default BlogPost;
