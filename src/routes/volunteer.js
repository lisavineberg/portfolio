import Layout from "../components/Layout";
import List from "../components/List";
import content from "../content/volunteer.json";

const Volunteer = () => {
  return (
    <Layout>
      <h1>Volunteer</h1>
      <List list={content}/>
    </Layout>
  )
}

export default Volunteer;
