import Layout from "../components/Layout";
import data from '../content/blog-posts.json';
import List from "../components/List";

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <List list={data}/>
    </Layout>
  )
}

export default Blog;
