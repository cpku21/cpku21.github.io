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
              vehicles and customers search, book, and manage reservations.
              I started it as the next step after my mentor-led projects: a
              larger application where I could connect the interface, API,
              authentication, database, and business rules into one product.
            </p>
            <dl className="projectDetails">
              <div>
                <dt>What I built</dt>
                <dd>
                  Responsive user flows for browsing and publishing cars,
                  account management, reservations, and separate owner and
                  customer views.
                </dd>
              </div>
              <div>
                <dt>What I worked through</dt>
                <dd>
                  NextAuth sessions, protected actions, ownership checks,
                  MongoDB data relationships, availability rules, validation,
                  loading states, and understandable error feedback.
                </dd>
              </div>
              <div>
                <dt>What I learned</dt>
                <dd>
                  How frontend decisions depend on API and data design, why
                  authorization must also be enforced on the server, and how
                  tests help protect important reservation rules while the app
                  changes.
                </dd>
              </div>
            </dl>
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
            a mentor-provided backend, through a more structured Next.js
            rebuild, to developing my own full-stack product.
          </p>
        </div>

        <div className="archiveGrid">
          <article className="archiveCard">
            <div className="cardIndex">01</div>
            <p className="cardKicker">NEXT.JS APPLICATION</p>
            <h3>Educator v2</h3>
            <p>
              A Next.js rebuild of the tutoring platform. My mentor defined the
              project and provided the backend, database models, and API
              contract; I read those models and built the frontend and its API
              integration.
            </p>
            <dl className="cardDetails">
              <div>
                <dt>My work</dt>
                <dd>
                  Reusable TypeScript components, Redux Toolkit state, typed
                  requests, authentication flows, protected pages, and forms
                  with Formik and Yup validation.
                </dd>
              </div>
              <div>
                <dt>What I learned</dt>
                <dd>
                  How clearer structure, shared state, reusable components, and
                  consistent validation make a growing application easier to
                  understand and maintain.
                </dd>
              </div>
            </dl>
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
              My first larger React application and the point where separate
              lessons became a connected product. My mentor provided the idea,
              Spring Boot backend, and data models; I implemented the frontend
              against that existing API.
            </p>
            <dl className="cardDetails">
              <div>
                <dt>My work</dt>
                <dd>
                  Responsive screens, reusable UI components, typed Axios
                  services, JWT authentication, protected routes, search, and
                  the main tutoring-platform user flows.
                </dd>
              </div>
              <div>
                <dt>What I learned</dt>
                <dd>
                  How React state, routing, forms, asynchronous requests, API
                  responses, and error handling work together in a real
                  multi-page application.
                </dd>
              </div>
            </dl>
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
              projects—first building frontends against a mentor-provided
              backend, then taking on API design, database work, security,
              testing, and deployment in my own full-stack application.
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
            <div><strong>Frontend integration</strong><p>TypeScript, Redux, API models, authentication, validation, and mentor feedback</p></div>
          </li>
          <li>
            <span>03</span>
            <div><strong>Full-stack development</strong><p>Next.js, MongoDB, business rules, security checks, testing, and production deployment</p></div>
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

