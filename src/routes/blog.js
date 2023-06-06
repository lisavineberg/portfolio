import Layout from "../components/Layout";
import Card from "../components/Card";
import data from '../content/blog-posts.json';

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {data.map((item, index) => <Card card={item} key={index} />)}
      </ul>
    </Layout>
  )
}

export default Blog;
