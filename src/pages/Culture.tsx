function Culture() {
    return (
        <main>
            <div className="title-block content-row">
                <div>
                    <h1>Culture</h1>
                    <h2>opinionated artworks lists</h2>
                </div>
            </div>

            <div className="tile">
                <p>
                    A good movie, anime or computer game feels like this
                    slightly chill breeze when you open your window at 2 am
                </p>
            </div>

            <div className="content-row">
                <h3>🎨 Art</h3>
                <div className="content-row">
                    <div className="column">
                        <iframe 
                            width="360" height="203"
                            src="https://www.youtube.com/embed/xOcn6hFVdDo?si=rLkcqaNbNGy3KuLu?controls=0&autoplay=1&modestbranding=1&rel=0" 
                            title="2:00AM bt Tony Skeor"
                            frameBorder="0"
                            allow="autoplay; encrypted-media; web-share; " 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className="column">
                        <p> 2:00 AM | TΞMPLUM by <a href="https://www.artstation.com/skeor" target="_blank" rel="noopener noreferrer">Tony Skeor</a></p>
                        <p>Tony is my absolute favourite artist. Not only is he extremely talented, but he is also a huge inspiration that clicks with me: his dreamy, yet not dystopin future.</p>
                        <p>Check <a href="https://www.artstation.com/artwork/d16Re" target="_blank" rel="noopener noreferrer">2:00 AM</a>, <a href="https://www.artstation.com/artwork/8e8aX6" target="_blank" rel="noopener noreferrer">Intro</a> and <a href="https://www.artstation.com/artwork/6LNDZr" target="_blank" rel="noopener noreferrer">Loners</a> from the TΞMPLUM series, as well as his other art on his <a href="https://www.artstation.com/skeor" target="_blank" rel="noopener noreferrer">Artstation</a>.</p>
                    </div>
                </div>
            </div>

            <div className="content-row">
                <h3>🎮 Games</h3>
                <div className="content-row">
                    <p>Coming soon...</p>
                </div>
            </div>

            <div className="content-row">
                <h3>🎬 Movies</h3>
                <div className="content-row">
                    <p>Coming soon...</p>
                </div>
            </div>

            <div className="content-row">
                <h3>🇯🇵 Anime</h3>
                <div className="content-row">
                    <p>Coming soon...</p>
                </div>
            </div>
        </main>
    );
}

export default Culture;