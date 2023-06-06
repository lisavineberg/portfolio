import Layout from "../components/Layout";
import Card from "../components/Card";
import data from '../blog-content/blog-posts.json';

const Blog = () => {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul className="list-unstyled">
        {data.map((item, index) => <Card card={item} key={index} />)}
      </ul>
    </Layout>
  )
}

export default Blog;
