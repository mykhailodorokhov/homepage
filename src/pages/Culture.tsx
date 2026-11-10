import type { ReactNode } from 'react';
import tallinnaUusSiluett from '../assets/tallinna-uus-siluett.jpg';
import ExternalLink from '../components/ExternalLink';

type Work = {
    title: ReactNode;
    year?: string;
    by: string;
};

type Series = {
    title: string;
    by?: string;
    items: string[];
};

type Entry = Work | Series;

function isSeries(entry: Entry): entry is Series {
    return 'items' in entry;
}

function EntryView({ entry }: { entry: Entry }) {
    if (isSeries(entry)) {
        return (
            <div className="series">
                <p>
                    <b>{entry.title}</b>
                    {entry.by && <><br />{entry.by}</>}
                </p>
                <p>
                    {entry.items.map((item, i) => (
                        <span key={item}>
                            {i > 0 && <br />}
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        );
    }

    return (
        <p>
            {typeof entry.title === 'string' ? <b>{entry.title}</b> : entry.title}
            {entry.year && ` (${entry.year})`}<br />
            {entry.by}
        </p>
    );
}

function CultureSection({ heading, left, right }: { heading: string; left: Entry[]; right: Entry[] }) {
    return (
        <div className="content-row">
            <h3>{heading}</h3>
            <div className="content-row">
                {[left, right].map((entries, i) => (
                    <div className="column" key={i}>
                        {entries.map((entry, j) => <EntryView entry={entry} key={j} />)}
                    </div>
                ))}
            </div>
        </div>
    );
}

const games: { left: Entry[]; right: Entry[] } = {
    left: [
        {
            title: 'Half-Life series',
            by: 'Valve Software',
            items: ['Black Mesa', 'Half-Life 2', 'Half-Life 2: Episode One', 'Half-Life 2: Episode Two', 'Half-Life: Alyx'],
        },
        { title: 'Soma', year: '2015', by: 'Frictional Games' },
        { title: 'Observer', year: '2017', by: 'Bloober Team' },
        { title: 'Ilya Mazo games', items: ["It's Winter", 'Neyasnoe'] },
        { title: 'Alan Wake', year: '2010', by: 'Remedy Entertainment' },
    ],
    right: [
        { title: 'Cyberpunk 2077', year: '2020', by: 'CD Projekt Red' },
        { title: 'Life Is Strange', year: '2015', by: 'Dontnod Entertainment' },
        { title: 'Stray', year: '2022', by: 'BlueTwelve Studio' },
    ],
};

const movies: { left: Entry[]; right: Entry[] } = {
    left: [
        { title: 'Blade Runner', year: '1982', by: 'Ridley Scott' },
        { title: 'Blade Runner 2049', year: '2017', by: 'Denis Villeneuve' },
        { title: 'Sin City', year: '2005', by: 'Frank Miller, Robert Rodriguez' },
        { title: 'Hero', year: '2002', by: 'Zhang Yimou' },
        { title: 'Interstellar', year: '2014', by: 'Christopher Nolan' },
        { title: 'Watchmen', year: '2009', by: 'Zack Snyder' },
        { title: 'Batman v Superman', year: '2016', by: 'Zack Snyder' },
        {
            title: <><b>Dune</b> (2021) and <b>Dune: Part Two</b> (2024)</>,
            by: 'Denis Villeneuve',
        },
        { title: '2001: A Space Odyssey', year: '1968', by: 'Stanley Kubrick' },
        { title: 'A.I.', year: '2001', by: 'Steven Spielberg' },
    ],
    right: [
        { title: 'Love, Death & Robots', year: '2019', by: 'David Fincher, Tim Miller' },
        { title: 'Black Mirror', year: '2011 - 2023', by: 'Charlie Brooker' },
        { title: 'Cloud Atlas', year: '2012', by: 'Lana & Lilly Wachowski, Tom Tykwer' },
        { title: 'Mr. Nobody', year: '2009', by: 'Jaco Van Dormael' },
        { title: 'V/H/S: Viral', year: '2014', by: 'Gary Binkow, Brad Miska' },
        { title: 'Parasite', year: '2019', by: 'Bong Joon-ho' },
        { title: 'Starship Troopers', year: '1997', by: 'Paul Verhoeven' },
        { title: "Don't Look Up", year: '2021', by: 'Adam McKay' },
        { title: 'The Naked Gun series', by: 'Jerry Zucker, Jim Abrahams' },
        { title: 'Hot Shots! series', by: 'Jim Abrahams' },
    ],
};

const anime: { left: Entry[]; right: Entry[] } = {
    left: [
        { title: 'Ghost in the Shell', year: '1995', by: 'Mamoru Oshii' },
        { title: 'Cowboy Bebop', year: '1998', by: 'Shinichirō Watanabe' },
        { title: 'Akira', year: '1988', by: 'Katsuhiro Otomo' },
        { title: 'Goku Midnight Eye', year: '1989', by: 'Yoshiaki Kawajiri' },
        { title: 'Cyber City Oedo 808', year: '1990', by: 'Yoshiaki Kawajiri' },
    ],
    right: [
        { title: 'Hayao Miyazaki', items: ['Spirited Away', "Kiki's Delivery Service", "Howl's Moving Castle"] },
        { title: 'Makoto Shinkai', items: ['Your Name', 'Weathering with You', 'Suzume'] },
        { title: 'Satoshi Kon', items: ['Perfect Blue', 'Paprika'] },
    ],
};

function Culture() {
    return (
        <main>
            <div className="title-block content-row">
                <div>
                    <h1>Culture</h1>
                    <h2>opinionated artworks lists</h2>
                </div>
            </div>

            <div className="tile section-gap">
                <p>
                    A good movie, anime or computer game feels like this
                    slightly chill breeze when you open your window at 2 am
                </p>
            </div>

            <div className="content-row">
                <h3>🎨 Art</h3>
                <div className="content-row art-row">
                    <div className="column">
                        <iframe
                            className="art-media"
                            src="https://www.youtube-nocookie.com/embed/xOcn6hFVdDo?autoplay=1&mute=1&controls=0&loop=1&playlist=xOcn6hFVdDo&playsinline=1&rel=0"
                            title="2:00 AM | TΞMPLUM by Tony Skeor"
                            allow="autoplay; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="column">
                        <p>
                            <b>2:00 AM | TΞMPLUM</b><br />
                            <ExternalLink href="https://www.artstation.com/skeor">Tony Skeor</ExternalLink><br />
                            2018
                        </p>
                        <p>
                            Tony is my absolute favourite artist. Not only is he extremely talented, but he is also
                            a huge inspiration that clicks with me: his dreamy, yet not dystopian future.
                        </p>
                        <p>
                            Check <ExternalLink href="https://www.artstation.com/artwork/d16Re">2:00 AM</ExternalLink>,{" "}
                            <ExternalLink href="https://www.artstation.com/artwork/8e8aX6">Intro</ExternalLink> and{" "}
                            <ExternalLink href="https://www.artstation.com/artwork/6LNDZr">Loners</ExternalLink> from
                            the TΞMPLUM series, as well as his other art on his{" "}
                            <ExternalLink href="https://www.artstation.com/skeor">Artstation</ExternalLink>.
                        </p>
                    </div>
                </div>
                <div className="content-row art-row">
                    <div className="column">
                        <img className="art-media" src={tallinnaUusSiluett} alt="Tallinna Uus Siluett poster by Leonhard Lapin" />
                    </div>
                    <div className="column">
                        <p>
                            <b>Tallinna Uus Siluett</b><br />
                            Leonhard Lapin<br />
                            1978
                        </p>
                        <p>
                            Leonhard Lapin (1947-2022) was an Estonian architect, artist and poet, one of the key
                            figures of the Estonian avant-garde.
                        </p>
                        <p>
                            Back in the late 1970s, when Estonia was still part of the USSR, he imagined a future
                            skyline for Tallinn and gave it a bold subtitle:
                        </p>
                        <p>
                            <i>"Tallinn - Eesti New York"</i><br />
                            (Tallinn as the New York of Estonia)
                        </p>
                        <p>
                            His imagination was truly visionary: almost 50 years later, Tallinn's skyline is indeed
                            full of skyscrapers, a sign of the economic development and the leap Estonia has made
                            since regaining its independence from the USSR.
                        </p>
                    </div>
                </div>
            </div>

            <CultureSection heading="🎮 Games" {...games} />
            <CultureSection heading="🎬 Movies" {...movies} />
            <CultureSection heading="🇯🇵 Anime" {...anime} />
        </main>
    );
}

export default Culture;
