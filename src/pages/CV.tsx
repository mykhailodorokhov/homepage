function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

function CV() {
    return (
        <main>
            <div className="title-block content-row">
                <div>
                    <h1>CV</h1>
                    <h2>Mykhailo Dorokhov</h2>
                </div>
            </div>

            <div className="content-row section-gap">
                <div className="tile">
                    <h3>📝 About me</h3>
                    <p>
                        I'm a <b>wide generalist</b> with a mix of technical depth, imagination and taste.
                        It's the combination that works well for guiding both AI systems and people.
                    </p>
                </div>
                <div className="tile">
                    <h3>💬 Languages</h3>
                    <div className="content-row">
                        <div className="column">
                            <p><b>C1</b><br />English</p>
                            <p><b>B1</b><br />Estonian</p>
                        </div>
                        <div className="column">
                            <p><b>Native</b><br />Ukrainian</p>
                            <p><b>Native</b><br />Russian</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-row">
                <div className="column">
                    <h3>🎓 Education</h3>
                    <p>
                        <b>PhD Computer Science</b>, ongoing<br />
                        Institute of Computer Science<br />
                        University of Tartu
                    </p>
                    <p>
                        <b>MSc Software Engineering</b> <i>(cum laude)</i> '24<br />
                        Institute of Computer Science<br />
                        University of Tartu
                    </p>
                    <p>
                        <b>BSc Computer Science</b> <i>(cum laude)</i> '14<br />
                        Simon Kuznets Kharkiv National<br />
                        University of Economics
                    </p>
                </div>
                <div className="column">
                    <h3>🧰 What I bring</h3>
                    <ul className="about-list">
                        <li>
                            - <b>Software engineering:</b> TypeScript, Node.js, Python, C# and SQL, with production
                            backend and migration work experience.
                        </li>
                        <li>
                            - <b>AI engineering:</b> RAG, multi-turn agents and evals I build at uni. Claude Tag and
                            setting up AI-first processes in industry. I use AI coding tools like Claude Code and Pi daily.
                        </li>
                        <li>
                            - <b>Applied research:</b> solving non-trivial problems. I do my PhD at the University of
                            Tartu's Institute of Computer Science, building an agentic, adaptive AI learning assistant.
                        </li>
                        <li>
                            - <b>People and project leadership:</b> led up to 12 people and five projects in parallel,
                            ran 1-on-1s, and looked after both delivery and team health. I ran 120+ interviews,
                            45+ engineers were hired through programmes I built, and I was part of the Tartu office
                            leadership team.
                        </li>
                        <li>
                            - <b>Public speaking and comms:</b> TEDx host, guest lecturer, and organiser of many events
                            and meetups in different cities. I volunteered at two schools as a teacher, so I can explain
                            any concept to a 16-year-old or to a C-level executive.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content-row">
                <h3>👨🏻‍💻 Experience</h3>

                <div className="content-row">
                    <div className="column">
                        <p>
                            PhD candidate<br />
                            <b>University of Tartu</b><br />
                            2025 - ...
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            As a PhD candidate, I am building <b>AITA (AI Teaching Assistant)</b> for Computer Science
                            courses at the University, available as an MCP and as a standalone application. It's
                            an <b>adaptive learning multi-step AI agent</b> that decomposes course into <i>knowledge
                            graph</i>, detects learner's edge of understanding, and guides learner through new knowledge
                            using <i>explicit and validated instructional strategies</i>. AITA tracks each <i>learner's
                            mastery, pace and preferences</i>, and is designed to comply with the EU AI Act.<br />
                            Technical stack: <b>Python, LangFuse, prompt and context engineering, RAG, evals,
                            guardrails, LLM-as-a-judge, agent state management, MCP</b>
                        </p>
                    </div>
                </div>

                <div className="content-row">
                    <div className="column">
                        <p>
                            Senior Engineering L&D Lead<br />
                            (R&D Ops, AI enablement)<br />
                            <b>Pipedrive</b>, 2024 - 2026
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            <b>2026:</b> Reporting directly to the CPTO, I lead the <b>agentic end-to-end PDLC
                            initiative</b>, where we created <b>AI workflows for a product engineering team</b>:
                            agents <i>surfacing customer signals</i>, maintaining <i>a live backlog</i> ranked by
                            ARR-at-risk, <i>triaging incoming issues, creating PRD</i> and <i>then PRs</i> for review
                        </p>
                        <p>
                            <b>2025:</b> Working directly with the CTO, I co-led <b>Customer Quality-of-Life</b>, an
                            initiative that <i>replaced fixed team ownership</i> with a <b>single delivery
                            pipeline</b>: PMs found friction in customer workflows from cross-validated customer
                            signals, and engineering teams were composed around each case to ship the fix or
                            enhancement. <i>11 use cases</i> and <i>3 big initiatives</i> landed
                        </p>
                    </div>
                </div>

                <div className="content-row">
                    <div className="column">
                        <p>
                            Engineering L&D Lead<br />
                            (Engineering Manager)<br />
                            <b>Pipedrive</b>, 2022 - 2023
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            <b>2022-2025:</b> I have built Pipedrive's <b>engineering early-careers</b> from scratch,
                            acting as an <i>Early Careers Engineering Manager</i> of a <b>mini innovation lab</b> (at
                            peak, managed 12 people across 5 parallel projects). Over 4 years,{" "}
                            <ExternalLink href="https://medium.com/pipedrive-engineering/pipedrives-school-of-code-from-bits-and-bytes-to-algorithm-avenue-a191d0912cc4">
                                internships
                            </ExternalLink>{" "}
                            brought <b>45+ engineers</b> (roughly <i>every 4th engineer</i> at that time), and interns
                            shipped <i>6 internal tools</i>, <i>1 customer-facing feature</i>, and validated different
                            ideas and PoC across <i>9 industry-academia master's thesis researches</i>.
                        </p>
                    </div>
                </div>

                <div className="content-row">
                    <div className="column">
                        <p>
                            Software Engineer<br />
                            <b>Pipedrive</b><br />
                            2019 - 2022
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            - Working as a Software Engineer in <b>Billing</b> team<br />
                            - Leading a team (5-7 engineers) that handles maintenance and bug fixes<br />
                            - Redesigned engineering onboarding and{" "}
                            <ExternalLink href="https://medium.com/pipedrive-engineering/pipedrives-new-buddy-program-5608d66d90bf">
                                buddy-program
                            </ExternalLink>
                            <br />
                            Technical stack: <b>JavaScript/koa.js; TypeScript/fastify, MySQL, knex.js, Redis</b>
                        </p>
                    </div>
                </div>

                <div className="content-row">
                    <div className="column">
                        <p>
                            Teaching Assistant<br />
                            <b>University of Tartu</b><br />
                            2016 - 2019
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            Conducting practical hands-on sessions as a TA at several courses:<br />
                            MTAT.03.295 <b>Agile Software Development</b> (Ruby and Elixir, JS/VueJS)<br />
                            MTAT.03.229 <b>Enterprise Systems Integration</b> (Java/Spring, JS/AngularJS)<br />
                            LTAT.05.005 <b>Software Project</b> (Project and product management, Agile)
                        </p>
                    </div>
                </div>

                <div className="content-row">
                    <div className="column">
                        <p>
                            Software Engineer<br />
                            <b>University of Tartu</b><br />
                            2016
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            In a collaboration with <b>Cybernetica AS</b>, working on a{" "}
                            <ExternalLink href="https://apps.dtic.mil/sti/trecms/pdf/AD1147783.pdf">
                                <b>DARPA</b>-procured privacy-related project
                            </ExternalLink>
                            .<br />
                            Technical stack: <b>Java, JavaScript, AngularJS</b>
                        </p>
                    </div>
                </div>

                <div className="content-row">
                    <div className="column">
                        <p>
                            Junior Software Engineer<br />
                            <b>Sigma Software</b><br />
                            2014 - 2015
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            Developing real estate management ERP system for Dutch client together with a Swedish
                            engineering team<br />
                            Technical stack: <b>C#, MVVM, WPF, SQL</b>
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-row">
                <h3>❤️‍🩹 Volunteering</h3>
                <div className="content-row">
                    <div className="column">
                        <p>
                            Programming teacher<br />
                            <b>Tartu Annelinna Gümnaasium</b><br />
                            2020 - 2025
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            <ExternalLink href="https://www.codesters.club/">Codesters.club</ExternalLink> mentor<br />
                            <b>Jaan Poska Gümnaasium</b><br />
                            2022 - 2025
                        </p>
                    </div>
                </div>
            </div>

            <div className="content-row">
                <h3>📺 In media</h3>
                <div className="content-row">
                    <div className="column">
                        <p>
                            <ExternalLink href="https://tasku.delfi.ee/podcast/b9a89e00-f4ca-11ed-99d3-977a6b37de87/?audio=5767e0c9-6529-4946-8980-ae47300bbf23">
                                Ukrainian IT specialist: writing code takes less than 80% of work
                            </ExternalLink>{" "}
                            (Ukrainian)<br />
                            Delfi, 19.10.2023
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            <ExternalLink href="https://tartu.postimees.ee/7398870/valistudengina-eestisse-tulnud-it-mees-opetab-gumnasiste-koodi-kirjutama">
                                Foreign IT specialist who came to Estonia teaches school students how to write code
                            </ExternalLink>{" "}
                            (Estonian)<br />
                            Tartu Postimees, 02.12.2021
                        </p>
                    </div>
                </div>
                <div className="content-row">
                    <div className="column">
                        <p>
                            <ExternalLink href="https://medium.com/pipedrive-engineering/pipedrives-new-buddy-program-5608d66d90bf">
                                Pipedrive's new buddy program
                            </ExternalLink>{" "}
                            (English)<br />
                            Pipedrive R&D Blog, 09.11.2021
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            <ExternalLink href="https://jupiterpluss.err.ee/1608348899/kofe">
                                Coffee+, 4:25
                            </ExternalLink>{" "}
                            (Russian)<br />
                            ETV+ morning show, 05.10.2021
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CV;
