import Layout from "../components/Layout";
import List from "../components/List";

const items = [
  {
    title: "DecodeMTL, summer 2018",
    subtitle: "Currently Concordia Bootcamps",
    text: "Intensive full-stack web development bootcamp that taught the fundamentals of programming, front-end development, and back-end development. Introduced me to concepts in HTML, Javascript, CSS, React, Node, Express, Mongo."
  },
  {
    title: "McGill University, 2010-2014",
    subtitle: "Bachelor's of Education, Secondary Education and Teaching, specializing in High School Math",
    text: "Graduated from the Secondary Math Education profile. Participated and excelled in various teaching field experiences across Montreal secondary schools. Consistently recognized for being able to motivate and engage students."
  },
  {
    title: "Dawson College, 2007-2009",
    subtitle: "DEC, First Choice (Honors) Health Sciences"
  }
]

const Education = () => {
  return (
    <Layout>
      <h1>Education</h1>
      <List list={items} />
    </Layout>
  )
}

export default Education;
