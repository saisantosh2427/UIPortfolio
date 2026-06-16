import React, { useState } from "react";
import { ArrowRight, Figma, Layers, Smartphone, Users, Sparkles, Mail, Linkedin, ExternalLink } from "lucide-react";
import "./style.css";

const skills = [
  "Figma", "Wireframing", "Prototyping", "User Research", "Usability Testing",
  "Design Systems", "Journey Mapping", "WCAG Accessibility", "React", "React Native",
  "AI-assisted UX", "Agile Collaboration"
];

const experiences = [
  {
    company: "Optum",
    location: "Charlotte, NC",
    role: "Senior UX Designer",
    period: "Sept 2023 – Present",
    summary:
      "Designed healthcare member and provider-facing experiences, simplified complex care workflows, and created reusable Figma design system patterns.",
    highlights: [
      "Led end-to-end UX for healthcare web and mobile applications focused on usability, accessibility, and workflow clarity.",
      "Created user personas, journey maps, wireframes, and high-fidelity prototypes to support product discovery and validation.",
      "Used AI tools to accelerate UX research synthesis, competitive analysis, usability insights, and design documentation."
    ]
  },
  {
    company: "Morgan Stanley",
    location: "Dallas, TX",
    role: "Product Designer",
    period: "May 2021 – Jul 2022",
    summary:
      "Designed wealth management and advisor-facing digital experiences that made financial workflows easier to understand and complete.",
    highlights: [
      "Built portfolio, account servicing, and dashboard flows with a focus on reducing user effort and improving information visibility.",
      "Partnered with product owners and engineers to translate financial requirements into clear and practical user experiences.",
      "Supported data-informed improvements through usability testing, heuristic reviews, and feedback analysis."
    ]
  },
  {
    company: "Dollar Tree",
    location: "India",
    role: "UX/UI Designer",
    period: "Feb 2020 – Apr 2021",
    summary:
      "Designed retail and e-commerce experiences for product discovery, navigation, checkout, and responsive customer journeys.",
    highlights: [
      "Created wireframes, visual designs, and prototypes for shopping, product browsing, search, and checkout features.",
      "Improved navigation structures and information architecture to support easier product discovery.",
      "Worked with development teams to clarify design behavior and maintain visual consistency across screens."
    ]
  }
];

const caseStudies = [
  {
    title: "Healthcare Member Journey Redesign",
    tag: "Optum",
    description:
      "Redesigned enrollment and care management journeys by mapping pain points, simplifying task flows, and validating improvements through usability testing.",
    tools: "Figma, Journey Maps, Usability Testing, Design System"
  },
  {
    title: "Financial Advisor Dashboard",
    tag: "Morgan Stanley",
    description:
      "Designed a dashboard experience that organized complex financial information into clearer visual sections for faster review and decision-making.",
    tools: "Figma, Prototyping, User Flows, Product Analytics"
  },
  {
    title: "Retail Product Discovery Experience",
    tag: "Dollar Tree",
    description:
      "Improved e-commerce browsing and search experiences through responsive layouts, simplified navigation, and clearer product interaction patterns.",
    tools: "Wireframes, Mobile UX, Responsive Design, UI Components"
  }
];

function App() {
  const [activeExperience, setActiveExperience] = useState(0);

  return (
    <main>
      <nav className="nav">
        <div className="logo">SS</div>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Senior UX Designer • Web & Mobile • AI-first Design</p>
          <h1>Designing simple, usable, and human-centered digital experiences.</h1>
          <p className="heroText">
            I’m Sai Santhosh, a UX Designer with 6+ years of experience designing healthcare,
            financial services, and retail products using Figma, research, prototyping,
            accessibility standards, and AI-supported design workflows.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#work">View Portfolio <ArrowRight size={18} /></a>
            <a className="secondaryBtn" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="heroCard">
          <div className="floatingTag"><Sparkles size={16} /> AI-assisted UX</div>
          <div className="mockWindow">
            <div className="windowTop"><span></span><span></span><span></span></div>
            <div className="wireframe">
              <div className="bar wide"></div>
              <div className="grid">
                <div></div><div></div><div></div>
              </div>
              <div className="bar"></div>
              <div className="bar small"></div>
              <button>Prototype Preview</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><h3>6+</h3><p>Years UX Experience</p></div>
        <div><h3>3</h3><p>Domains Designed</p></div>
        <div><h3>12+</h3><p>Core UX Skills</p></div>
        <div><h3>100%</h3><p>Figma-focused Workflow</p></div>
      </section>

      <section id="skills" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Skills</p>
          <h2>Design toolkit built for modern product teams</h2>
        </div>
        <div className="skillGrid">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="work" className="section split">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Selected professional experience</h2>
          <p className="muted">
            Interactive role cards based on healthcare, finance, and retail product design work.
          </p>
          <div className="tabs">
            {experiences.map((item, index) => (
              <button
                key={item.company}
                className={activeExperience === index ? "active" : ""}
                onClick={() => setActiveExperience(index)}
              >
                {item.company}
              </button>
            ))}
          </div>
        </div>

        <div className="experienceCard">
          <p className="period">{experiences[activeExperience].period}</p>
          <h3>{experiences[activeExperience].role}</h3>
          <p className="company">
            {experiences[activeExperience].company} • {experiences[activeExperience].location}
          </p>
          <p>{experiences[activeExperience].summary}</p>
          <ul>
            {experiences[activeExperience].highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Case Studies</p>
          <h2>Simple portfolio project cards</h2>
        </div>
        <div className="caseGrid">
          {caseStudies.map((study) => (
            <article className="caseCard" key={study.title}>
              <span>{study.tag}</span>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <small>{study.tools}</small>
              <a href="#contact">Discuss this work <ExternalLink size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach">
        <div className="approachCard"><Figma /><h3>Design in Figma</h3><p>Wireframes, prototypes, components, design systems, and handoff-ready screens.</p></div>
        <div className="approachCard"><Users /><h3>Research with users</h3><p>Personas, journeys, usability testing, feedback analysis, and design validation.</p></div>
        <div className="approachCard"><Layers /><h3>Build reusable systems</h3><p>Scalable patterns, component libraries, accessibility guidelines, and UX standards.</p></div>
        <div className="approachCard"><Smartphone /><h3>Web & mobile UX</h3><p>Responsive experiences for healthcare, finance, retail, SaaS, and enterprise platforms.</p></div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build better product experiences.</h2>
        <p>Email: Saisantosh35209@gmail.com</p>
        <div className="contactActions">
          <a className="primaryBtn" href="mailto:Saisantosh35209@gmail.com"><Mail size={18} /> Email Me</a>
          <a className="secondaryBtn" href="#" aria-label="LinkedIn"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </section>
    </main>
  );
}

export default App;
