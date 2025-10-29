import { motion } from 'framer-motion'

const fade = { initial: {opacity:0, y:8}, animate:{opacity:1, y:0}, transition:{duration:.4} }

export default function App(){
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <div className="brand">Gunjan Mohan</div>
          <div className="links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="/resume.pdf" target="_blank" rel="noopener">Resume</a>
          </div>
        </div>
      </nav>

      <header className="hero container">
        <motion.h1 className="h1" {...fade}>
          Data Engineer • AWS • Event‑Driven Systems
        </motion.h1>
        <motion.p {...fade} transition={{...fade.transition, delay:.05}}>
          I’m a Data Engineer who builds reliable, event‑driven data systems on AWS. I care about automation,
          observability, and making data easy to trust. My work spans Redshift warehousing, serverless orchestration,
          and integrating ML/AI signals into data platforms.
        </motion.p>
        <div className="cta">
          <a className="btn primary" href="#experience">See experience</a>
          <a className="btn" href="#contact">Get in touch</a>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noopener">Download resume</a>
        </div>
      </header>

      <section id="about" className="section container">
        <h2>About</h2>
        <div className="card">
          <p>
            I build large‑scale, AWS‑native data systems that power analytics and operational visibility across thousands of workflows.
            I like taking ambiguous systems and giving them clear structure: modular pipelines, strong data contracts,
            and automation that removes manual work.
          </p>
          <p style={{color:'#b6b6c8'}}>
            Recently, I’ve focused on Redshift health frameworks, event‑driven orchestration (Lambda, Step Functions, EventBridge),
            and streaming patterns with Kinesis. I’m also hands‑on with GenAI/RAG concepts to make data more discoverable.
          </p>
        </div>
      </section>

      <section id="experience" className="section container">
        <h2>Experience</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>Amazon — Data Engineer</h3>
            <div className="meta">Seattle, WA • 2023 – Present</div>
            <ul>
              <li>Designed AWS‑native pipelines & warehousing layers (Redshift, Glue, S3) for analytics consumers.</li>
              <li>Built serverless, event‑driven workflows (Lambda, Step Functions, EventBridge) to automate data operations.</li>
              <li>Partnered with BI/Science to define schemas, SLAs, and guardrails that improved trust & reliability.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Vizio — Data Scientist</h3>
            <div className="meta">Seattle, WA • 2023</div>
            <ul>
              <li>Automated data‑quality workflows and anomaly alerting for marketing analytics.</li>
              <li>Improved reporting SLAs by reducing manual steps and stabilizing pipelines.</li>
            </ul>
          </div>
          <div className="card">
            <h3>ZS Associates (Pfizer COE) — Decision Analytics</h3>
            <div className="meta">Gurugram, India • 2019 – 2021</div>
            <ul>
              <li>Developed ETL frameworks and dashboards used by multiple global teams.</li>
              <li>Migrated legacy models to Redshift, cutting compute time and costs.</li>
            </ul>
          </div>
          <div className="card">
            <h3>Urban Company — Analytics Intern</h3>
            <div className="meta">Gurugram, India • 2019</div>
            <ul>
              <li>Analyzed retention and market expansion from sales and geospatial data.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section container">
        <h2>Skills</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>Languages & Data</h3>
            <ul>
              <li>Python, SQL, PySpark</li>
              <li>Pandas, Scikit‑learn</li>
            </ul>
          </div>
          <div className="card">
            <h3>AWS</h3>
            <ul>
              <li>Redshift, Glue, Athena, EMR</li>
              <li>Lambda, Step Functions, EventBridge</li>
              <li>DynamoDB, S3, Kinesis, CloudWatch</li>
            </ul>
          </div>
          <div className="card">
            <h3>Architecture & Tools</h3>
            <ul>
              <li>Event‑driven systems, Data Lake design</li>
              <li>CI/CD (CDK), Airflow, QuickSight/Tableau</li>
              <li>Data modeling, performance tuning</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section container">
        <h2>Contact</h2>
        <div className="card">
          <p style={{marginTop:0}}>Open to H‑1B transfer opportunities and data engineering roles.</p>
          <div className="contact">
            <a className="link" href="mailto:gunjanx1997@gmail.com" aria-label="Email">
              <svg className="icon" viewBox="0 0 24 24"><path d="M4 6h16a2 2 0 0 1 2 2v.5l-10 6-10-6V8a2 2 0 0 1 2-2Zm-2 5.5 9.4 5.64a2 2 0 0 0 2.2 0L23 11.5V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.5Z"/></svg>
              Email
            </a>
            <a className="link" href="https://www.linkedin.com/in/gunjan-mohan/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg className="icon" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.3V23h-4v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V23h-4V8.5z"/></svg>
              LinkedIn
            </a>
            <a className="link" href="/resume.pdf" target="_blank" rel="noopener">
              <svg className="icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16l6-3 6 3V8l-2-2zM14 2l6 6"/></svg>
              Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div>Built by Gunjan Mohan © 2025</div>
      </footer>
    </div>
  )
}
