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
import Card from "../components/Card"







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

const IndexPage = () => (
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
          <path fill="#fff" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,138.7C480,139,600,117,720,112C840,107,960,117,1080,138.7C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
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
            image={card1}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card1}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card1}
            />
            <Card
            title="React for Beginers"
            text="12 section"
            image={card1}
            />
        </div>
      </div>
    </div>
    {/* <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="bro" />

export default IndexPage
