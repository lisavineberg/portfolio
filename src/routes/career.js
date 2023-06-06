import Layout from "../components/Layout";
import List from "../components/List";
import content from "../content/career.json"

const Career = () => {

  return (
    <Layout>
      <h1>Career</h1>
      <div>
        <h2>Web development experience</h2>
        <List list={content.webDev} />
        <h2>Prior experience</h2>
        <List list={content.nonWebDev} />
      </div>
    </Layout>
  )
}

export default Career;
