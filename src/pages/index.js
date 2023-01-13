import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import figma from '../images/figma.png'
import graphql from '../images/graphql.png'
import react from '../images/react.png'
import javascript from '../images/javascript.png'
import gatsby from '../images/gatsby-icon.png'
import git from '../images/git.png'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import card5 from '../images/card5.png'
import Card from "../components/Card"
import Section from "../components/Section"
import Cells from "../components/Cells"
import staticdata from '../../staticdata.json'

 






const links = [
  {
    text: "ihi",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () =>{
return(
  <Layout>
    <div>
      <div className="hero">
        <div className="hero-group">
          <h1>Learn to design and code React apps</h1>
          <p>complete course about the best tools and design</p>
          <Link>Watch the video</Link> 
          <div className="logos">
            <img src={figma} alt="figma" width="50"/>
            <img src={graphql} alt="garphql" width="50"/>
            <img src={git} alt="git" width="50"/>
            <img src={javascript} alt="javascript" width="50"/>
            <img src={react} alt="react" width="50"/>
            <img src={gatsby} alt="gatsby" width="50"/>
          </div>
          <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,96L60,106.7C120,117,240,139,360,138.7C480,139,600,117,720,112C840,107,960,117,1080,138.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="cards">
        <h2>11 course, more coming</h2>
        <div className="cards-group">
          <Card
            title="React for Beginers"
            text="12 section"
            image={card1}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card2}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card3}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card4}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card5}
            />
        </div>
      </div>
      
      <Section 
      logo={react}
      title="Learn React"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate, ante lobortis pretium pulvinar, dolor elit imperdiet nisi, ac venenatis massa ex lacinia augue. Etiam et sapien placerat, tincidunt felis et, fermentum libero. Curabitur elit dolor, eleifend non quam in, commodo sagittis ex. "
      />
      <div>
      <p className='section-title'>12 Section - 6 hours</p>
        <div className='section-cell-group'>
            {staticdata.cells.map(cell => (
              <Cells
              title={cell.title}
              image={cell.image}
              />
            ))}
        </div>  
      </div>  
    </div>
  </Layout>
 )
}


export const Head = () => <Seo title="bro" />

export default IndexPage
