import Layout from "../components/Layout";
import List from "../components/List";
import content from "../content/projects.json";

const Projects = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <List list={content} />
    </Layout>
  )
}

export default Projects;
