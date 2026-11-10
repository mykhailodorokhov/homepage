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
            I am <b>Mykhailo</b> [mɪxɑjlɔ].
          </p>
          <p>
            I was born in Kharkiv, Ukraine. As a kid, I liked trams, tried
            writing novels and composed music. In 3rd grade, I discovered a
            programming book my father had bought, and that’s when I started
            writing simple apps and games in Visual Basic, which ultimately
            influenced my career path.
          </p>
          <p>
            Some time later, life brought me to Estonia, a small Northern
            European country with beautiful forests, lakes, bogs, charming
            manors, advanced e-state, rich history and traditions. I completed
            Master's in Software Engineering at the University of Tartu, where I
            also worked some time as a Teaching Assistant.
          </p>
          <p>
            These days I would describe myself as an engineering leader with a
            product mindset who ended up building systems and processes that
            help product teams: first as an engineer, then as an engineering
            manager, now with AI agents. I work in between industry and
            academia, research and production, people and code.
          </p>
          <p>
            At Pipedrive, reporting directly to C-level executives, I led the
            Customer Quality of Life and Agentic PDLC initiatives, part of the
            company's transformation into an AI-first company. As an engineering
            manager, at peak I led 12 people across 5 parallel projects and
            built an early-careers ecosystem from scratch, that acted as a mini
            innovation lab and brought in every fourth engineer in the company.
          </p>
          <p>
            I also do my PhD at the University of Tartu, where I am building
            AITA, an adaptive multi-step AI teaching assistant for Computer
            Science courses, and give lectures on SaaS business and marketing
            in the AI era to business students. I have volunteered for many
            years as a Codesters.club mentor at Tartu Jaan Poska Gümnaasium,
            teaching business analysis, design, and programming, and as a
            teacher at Tartu Annelinna Gümnaasium, where I taught a programming
            course that I authored.
          </p>
          <p>
            I enjoy yoga, playing the piano and composing my own music, as well as badminton
            (feel free to challenge me!), biking and hiking, and am a 
            big electric car enthusiast. If you have a great idea you'd like to discuss 
            over a cup of tea - feel free to drop me a message!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
