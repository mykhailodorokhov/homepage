import mykhailoImage from '../assets/mykhailodorokhov3.png';

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
          <h2>Engineering Management; Project Management; Education;</h2>
        </div>
      </section>

      <div className="content-row">
        <div className="tile">
          <h3>👨🏻‍💻 Work</h3>
          <p>
            Senior Engineering L&D Lead
            <br />
            <b>Pipedrive</b>
          </p>
          <p>
            Junior Research Fellow
            <br />
            <b>University of Tartu</b>
          </p>
        </div>
        <div className="tile">
          <h3>🎓 Education</h3>
          <p>
            PhD Mathematics and Computer Science '29
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
            Currently, I work at Pipedrive, where I manage software engineering
            internships and collaboration with academia, oversee engineering
            onboarding, and assist with R&D meetups.
          </p>
          <p>
            I also teach a custom-developed IT course at Tartu Annelinna
            Gümnaasium and volunteer as a Codesters.club mentor at Tartu Jaan
            Poska Gümnaasium. I enjoy hiking and biking and am a big electric
            car enthusiast.
          </p>
          <p>
            If you have a great idea you'd like to discuss over a cup of tea -
            feel free to drop me a message!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;