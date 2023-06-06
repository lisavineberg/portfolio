import { useParams } from "react-router";
import Layout from "../../components/Layout";

import data from '../../content/blog-posts.json';

const BlogPost = () => {
  const { id } = useParams();

  const blogPostData =  data.find(item => item.id === id)

  return (
    <Layout>
      <h1>{blogPostData.title}</h1>
      <p>{blogPostData.desc}</p>
    </Layout>
  )
}

export default BlogPost;
