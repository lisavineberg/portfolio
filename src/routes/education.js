import Layout from "../components/Layout";
import List from "../components/List";
import content from "../content/education.json"

const Education = () => {
  return (
    <Layout>
      <h1>Education</h1>
      <List list={content} />
    </Layout>
  )
}

export default Education;
