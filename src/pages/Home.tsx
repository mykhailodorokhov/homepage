import mykhailoImage from '../assets/mykhailodorokhov.jpg';

function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <img
            id="md-img"
            src={mykhailoImage}
            alt="Mykhailo Dorokhov"
          />
        </div>
        <div>
          <h1>Mykhailo Dorokhov</h1>
          <h2>Product Engineering Leader &amp; Applied Researcher</h2>
        </div>
      </section>

      <div className="content-row">
        <div className="tile">
          <h3>👨🏻‍💻 Work</h3>
          <p>
            Senior Engineering L&D Lead
            <br />
            <i>(Early Careers Engineering Manager;</i>
            <br />
            <i>AI enablement)</i>
            <br />
            <b>Pipedrive</b>
          </p>
          <p>
            PhD Candidate, Research Fellow
            <br />
            <b>University of Tartu</b>
          </p>
        </div>
        <div className="tile">
          <h3>🎓 Education</h3>
          <p>
            PhD Candidate in Computer Science
            <br />
            <b>University of Tartu</b>
          </p>
          <p>
            MSc Software Engineering '24 <i>(cum laude)</i>
            <br />
            <b>University of Tartu</b>
          </p>
          <p>
            BSc Computer Science '14 <i>(cum laude)</i>
            <br />
            <b>
              Simon Kuznets Kharkiv National
              <br />
              University of Economics
            </b>
          </p>
        </div>
      </div>

      <div className="content-row">
        <div className="text">
          <h3>👋 Hi</h3>
          <p>
            I am <b>Mykhailo</b> [mɪxɑjlɔ], but everyone calls me <b>Mike</b>.
          </p>
          <p>
            I was born in <i>Kharkiv, Ukraine</i>. As a kid, I liked trams, tried
            writing novels and composed music. In 3rd grade, I discovered a
            programming book my father had bought, and that’s when I started
            writing simple apps and games in Visual Basic, which ultimately
            influenced my career path.
          </p>
          <p>
            Some time later, life brought me to Estonia, a small Northern
            European country with beautiful forests, lakes, bogs, charming
            manors, advanced e-state, rich history and traditions. I completed 
            <b> Master's in Software Engineering</b> at the University of Tartu, where I
            also worked some time as a Teaching Assistant.
          </p>
          <p>
            These days I would describe myself as an <i>engineering leader with a
            product mindset</i> who ended up building systems and processes that
            help product teams: first as an <b>engineer</b>, then as an <b>engineering
            manager</b>, now with <b>AI agents</b>. I work in between industry and
            academia, research and production, people and code.
          </p>
          <p>
            I’m doing a PhD at the University of Tartu, where I’m building AITA, 
            an adaptive multi-step AI agent for learning. I also give lectures 
            on SaaS business and marketing in the AI era to business students.
          </p>
          <p>
            At Pipedrive, reporting directly to C-level executives, I led the
            <i>Customer Quality of Life</i> and <i>Agentic PDLC</i> initiatives, part of the
            company's transformation into an <i>AI-first</i> company. As an <b>engineering
            manager</b>, at peak I led 12 people across 5 parallel projects and
            built an <b>early-careers ecosystem</b> from scratch, that acted as a <i>mini
            innovation lab</i> and brought in <i>every fourth engineer</i> in the company.
          </p>
          <p>
            In my free time, I enjoy yoga, biking and badminton, 
            play the piano and compose my own music (soon releasing at Spotify, stay tuned!).  I have volunteered 
            for many years as a Codesters.club mentor at Tartu Jaan Poska Gümnaasium, 
            teaching <i>business analysis, design, and programming</i>, and as a 
            programming teacher at Tartu Annelinna Gümnaasium - so I can explain 
            same concept to both a 16-year-old school student and a C-level executive! 🙂
          </p>
          <p>
            If you have a great idea you'd like to discuss over a cup of tea or coffee - 
            feel free to drop me a message!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
