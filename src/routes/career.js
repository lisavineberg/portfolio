import Layout from "../components/Layout";
import List from "../components/List";

const webDevItems = [
  {
    title: "Half Helix",
    subtitle: "Front End Web Developer, Aug 2021 - present",
    text: "Building client websites on Shopify's platform with a strong focus on accessibility. Communicated with clients to update them on project status. Worked internally to outline stronger code and code review standards."
  },
  {
    title: "AppDirect",
    subtitle: "Front End Web Developer, Mar 2020 - July 2021",
    text: "Built new features and maintained older portions of the company website. Worked independently on two major projects, plus collaborated with the team on smaller features and code review. Participated and led many company culture initiatives."
  },
  {
    title: "Diff Agency",
    subtitle: "Front End Web Developer, Oct 2018 - Feb 2020",
    text: "Promoted from junior to intermediate developer. Created and implemented complex Javascript solutions based on client requests."
  },
  {
    title: "Freelance",
    subtitle: "Jan 2022 - present",
    text: "Maintaining and updating a legacy Wordpress sites. Finding ways to add new modules within the existing infrastructure. Adding small modules to Shopify sites."
  }
];
const nonWebDevItems = [
  {
    title: "Bier Markt",
    subtitle: "Waitress/Supervisor, 2013 - 2017",
    text: "Started as a busgirl and spent time as a waitress, bartender, and supervisor in a high volume, quality restaurant."
  },
  {
    title: "Urgences Sante",
    subtitle: "Emergency Medical Dispatcher, Jan 2016 - Jun 2016",
    text: "Responded to 911 medical calls and dispatched ambulances across the territory of Montreal and Laval."
  }
];

const Career = () => {
  return (
    <Layout>
      <h1>Career</h1>
      <div>
        <h2>Web development experience</h2>
        <List list={webDevItems} />
        <h2>Prior experience</h2>
        <List list={nonWebDevItems} />
      </div>
    </Layout>
  )
}

export default Career;
