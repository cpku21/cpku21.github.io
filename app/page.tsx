const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'MongoDB',
  'Node.js',
  'Tailwind CSS',
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="logo" href="#top" aria-label="Srdjan Vasic — home">
          SV<span>.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="navCta" href="mailto:srdjanns95@gmail.com">
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">
            <span className="statusDot" /> Open to junior opportunities
          </p>
          <h1>
            I build thoughtful
            <br />
            <span>web experiences.</span>
          </h1>
          <p className="heroText">
            I&apos;m Srdjan, a full-stack developer and mechanical engineer
            focused on turning complex problems into reliable, human-centered
            products.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="button buttonGhost"
              href="https://github.com/cpku21"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="portraitMark">SV</div>
          <div className="floatingTag tagOne">BUILD</div>
          <div className="floatingTag tagTwo">LEARN</div>
          <div className="floatingTag tagThree">IMPROVE</div>
        </div>
      </section>

      <section className="skillsStrip" aria-label="Core technologies">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </section>

      <section className="workSection" id="work">
        <div className="sectionIntro">
          <p className="sectionNumber">01 / SELECTED WORK</p>
          <h2>Built to solve real problems.</h2>
        </div>

        <article className="featuredProject">
          <div className="projectPreview">
            <div className="browserFrame">
              <div className="browserBar">
                <i />
                <i />
                <i />
                <span>rentmycar.app</span>
              </div>
              <div className="mockApp">
                <div className="mockNav">RentMyCar</div>
                <div className="mockHero">
                  <small>PEER-TO-PEER CAR RENTAL</small>
                  <strong>Find your next ride.</strong>
                  <div className="mockSearch">Search available cars →</div>
                </div>
                <div className="mockCards">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="projectCopy">
            <p className="projectType">FEATURED · FULL-STACK</p>
            <h3>RentMyCar</h3>
            <p>
              A peer-to-peer car rental marketplace where owners publish
              vehicles and renters search, book, and manage reservations.
              Built around secure authentication, ownership checks, reliable
              availability, and responsive user flows.
            </p>
            <ul className="projectStack" aria-label="Project technologies">
              <li>Next.js 14</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>NextAuth</li>
              <li>Vitest</li>
            </ul>
            <div className="projectActions">
              <a
                className="button buttonPrimary"
                href="https://rent-my-car-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live demo <span aria-hidden="true">↗</span>
              </a>
              <a
                className="textLink"
                href="https://github.com/stefan-lukic/rent-my-car-app"
                target="_blank"
                rel="noreferrer"
              >
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="projectArchive" aria-labelledby="archive-title">
        <div className="archiveHeader">
          <p className="sectionNumber darkNumber">02 / EARLIER WORK</p>
          <h2 id="archive-title">A record of steady progress.</h2>
          <p>
            Each project marks a step forward—from a React client connected to
            an external API to structured Next.js applications and independent
            full-stack development.
          </p>
        </div>

        <div className="archiveGrid">
          <article className="archiveCard">
            <div className="cardIndex">01</div>
            <p className="cardKicker">NEXT.JS APPLICATION</p>
            <h3>Educator v2</h3>
            <p>
              A Next.js rebuild of a tutoring platform developed with mentor
              guidance, with reusable TypeScript components, Redux state, form
              validation, and a disciplined project structure.
            </p>
            <ul>
              <li>Next.js 13</li>
              <li>Redux Toolkit</li>
              <li>Styled Components</li>
              <li>Formik + Yup</li>
            </ul>
          </article>

          <article className="archiveCard inverseCard">
            <div className="cardIndex">02</div>
            <p className="cardKicker">REACT APPLICATION</p>
            <h3>Educator v1</h3>
            <p>
              A React tutoring platform connected to a Spring Boot API,
              featuring typed service modules, JWT authentication, protected
              routes, search flows, and reusable UI components.
            </p>
            <ul>
              <li>React 18</li>
              <li>TypeScript</li>
              <li>React Router</li>
              <li>Axios</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutLabel">
          <p className="sectionNumber darkNumber">03 / ABOUT</p>
        </div>
        <div className="aboutCopy">
          <h2>Engineering mindset. Developer curiosity.</h2>
          <div className="aboutColumns">
            <p>
              My background in mechanical engineering taught me to break down
              complex systems, work methodically, and care about how every part
              contributes to the whole.
            </p>
            <p>
              I bring that same mindset to software. I&apos;ve spent the last
              several years learning modern web development through real
              projects, mentor feedback, code reviews, testing, and continuous
              iteration.
            </p>
          </div>

          <div className="principles">
            <div><strong>01</strong><span>Build for people</span></div>
            <div><strong>02</strong><span>Keep learning</span></div>
            <div><strong>03</strong><span>Own the details</span></div>
          </div>
        </div>
      </section>

      <section className="journeySection" aria-labelledby="journey-title">
        <p className="sectionNumber">04 / JOURNEY</p>
        <h2 id="journey-title">From first component to full-stack product.</h2>
        <ol className="timeline">
          <li>
            <span>01</span>
            <div><strong>Frontend foundations</strong><p>JavaScript, React, responsive UI, reusable components</p></div>
          </li>
          <li>
            <span>02</span>
            <div><strong>Structured applications</strong><p>TypeScript, Redux, APIs, authentication, mentor-led reviews</p></div>
          </li>
          <li>
            <span>03</span>
            <div><strong>Full-stack ownership</strong><p>Next.js, MongoDB, security, testing, production deployment</p></div>
          </li>
        </ol>
      </section>

      <section className="contactSection" id="contact">
        <p className="sectionNumber darkNumber">05 / CONTACT</p>
        <div className="contactBody">
          <p>Have a junior opportunity or a project worth building?</p>
          <h2>Let&apos;s make something useful.</h2>
          <a className="contactEmail" href="mailto:srdjanns95@gmail.com">
            srdjanns95@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Srdjan Vasic</p>
        <p>Built with Next.js &amp; TypeScript</p>
        <a href="https://github.com/cpku21" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </main>
  );
}

