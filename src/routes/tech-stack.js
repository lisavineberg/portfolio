import Layout from "../components/Layout";
import List from "../components/List";

const frontEnd = [
  {
    subtitle: "HTML"
  },
  {
    subtitle: "CSS"
  },
  {
    subtitle: "Javascript"
  }
]

const additionalFrontEnd = [
  {
    subtitle: "React"
  },
  {
    subtitle: "Gatsby"
  },
  {
    subtitle: "Vue"
  },
  {
    subtitle: "Styled components"
  },
  {
    subtitle: "SCSS"
  }
]

const backEnd = [
  {
    subtitle: "graphql"
  },
  {
    subtitle: "Apollo"
  },
  {
    subtitle: "Fauna DB"
  },
  {
    subtitle: "Firebase"
  },
  {
    subtitle: "CORS"
  },
  {
    subtitle: "RESTful APIs"
  }
]

const skills = [
  {
    subtitle: "accessibility/ADA standards"
  },
  {
    subtitle: "web components"
  },
  {
    subtitle: "cross browser testing"
  },
  {
    subtitle: "responsive design"
  },
  {
    subtitle: "serverless functions"
  },
  {
    subtitle: "CMS & third party integrations"
  },
  {
    subtitle: "headless websites"
  }
]

const TechStack = () => {
  return (
    <Layout>
      <h1>Tech Stack</h1>
      <h2>Front end (basics)</h2>
      <List list={frontEnd} />
      <h2>Additional front end</h2>
      <List list={additionalFrontEnd} />
      <h2>Back end/connections</h2>
      <List list={backEnd} />
      <h2>Other skills, strengths</h2>
      <List list={skills} />
    </Layout>
  )
}

export default TechStack;
