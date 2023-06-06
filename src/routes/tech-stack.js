import Layout from "../components/Layout";
import content from "../content/tech-stack.json";

const handelize = (item) => {
  return item.toLowerCase().replace(/ /g,'-')
}

const TechStack = () => {
  return (
    <Layout>
      <h1>Tech Stack</h1>
      <h2>Front end (basics)</h2>
      <ul>
        {content.frontEnd.map(el => <li key={handelize(el)}>{el}</li>)}
      </ul>
      <h2>Additional front end</h2>
      <ul>
        {content.additionalFrontEnd.map(el => <li key={handelize(el)}>{el}</li>)}
      </ul>
      <h2>Back end/connections</h2>
      <ul>
        {content.backEnd.map(el => <li key={handelize(el)}>{el}</li>)}
      </ul>
      <h2>Other skills, strengths</h2>
      <ul>
        {content.skills.map(el => <li key={handelize(el)}>{el}</li>)}
      </ul>
    </Layout>
  )
}

export default TechStack;
