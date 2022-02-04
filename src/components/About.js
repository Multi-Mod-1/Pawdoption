import "./About.css";

function About() {
  return (
      <div>
          <h1 style={{"marginTop": "-1.5em"}}>The Hearts Behind It All</h1>
        <div className="about-grid">
            <div className="one">
                <a href="https://github.com/LuFrei" className="about-links" target={"_blank"}>
                    <img src="https://avatars.githubusercontent.com/u/32626445?v=4" className="about-image" />
                    <div>
                        Lucas
                    </div>
                </a>
            </div>
            <div className="two">
                <a href="https://github.com/EricDavenport" className="about-links" target={"_blank"}>
                    <img src="https://avatars.githubusercontent.com/u/55724749?v=4" className="about-image" />
                    <div>
                        Eric
                    </div>
                </a>
            </div>

            <div className="three">
                <a href="https://github.com/monterojavier" className="about-links" target={"_blank"}>
                    <img src="https://avatars.githubusercontent.com/u/34133510?v=4" className="about-image" />
                    <div>
                        Javi
                    </div>
                </a>
            </div>
            <div className="four">
                <a href="https://github.com/CJGarciaMusic" className="about-links" target={"_blank"}>
                    <img src="https://avatars.githubusercontent.com/u/50566094?v=4" className="about-image" />
                    <div>
                        CJ
                    </div>
                </a>
            </div>
          </div>
      </div>
  );
}

export default About;
