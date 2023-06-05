import Layout from "../components/Layout";
import List from "../components/List";

const items = [
  {
    title: "Resumes for Ukraine",
    subtitle: "Resume editor, Oct 2022 - present"
  },
  {
    title: "Shelter Movers",
    subtitle: "Web developer, Aug 2022 - present"
  },
  {
    title: "TIP-OA",
    subtitle: "Friendly caller, Jan 2021 - present"
  },
  {
    title: "YMCA NDG",
    subtitle: "Math tutor, Sep 2020 - present"
  }
]

const Volunteer = () => {
  return (
    <Layout>
      <h1>Volunteer</h1>
      <List list={items}/>
    </Layout>
  )
}

export default Volunteer;
