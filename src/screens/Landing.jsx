import "../styles/landing.css";
import Figma from "../assets/figma64.png";
import Facebook from "../assets/facebook64.png";
import Vercel from "../assets/vercel64.png";

function LandingPage() {
  return (
    <div className="landing">
      <nav>
        <h1>Jobless</h1>
        <ul>
          <li>Home</li>
          <li>Discover</li>
          <li>Post a Job</li>
          <li>Contact Us</li>
        </ul>
        <button>Sign Up</button>
      </nav>
      <main>
        <h1>Get Connected to the Best Remote Jobs in Your Field</h1>
        <p>
          Discover a wide range of remote opportunities on our platform and take
          control of your career
        </p>
        <section className="extras">
          <button>Explore Remote Jobs</button>
          <a href="#">How it works?</a>
        </section>
      </main>

      {/* featured jobs section */}

      <h1 className="jobs">Featured Jobs</h1>
      <section className="featured">
        <div>
          <header>
            <img src={Figma} alt="Figma" />
            <article>
                <h1>Front-End Developer</h1>
            <p className="little">Figma</p>
            </article>
          </header>
          <p>We are looking for an front-end developer to join our team</p>
          <footer className="price">
            <button>Rust</button>
            <span>$70,000 - $90,000</span>
          </footer>
        </div>
        <div>
          <header>
            <img src={Facebook} alt="Facebook" />
            <article>
                <h1>Data Scientist</h1>
            <p className="little">Facebook</p>
            </article>
          </header>
          <p>We are seeking a data scientist to join our team</p>
          <footer className="price">
            <button>Python</button>
            <span>$100,000 - $130,000</span>
          </footer>
        </div>
        <div>
          <header>
            <img src={Vercel} alt="Vercel" />
            <article>
                <h1>Technical Writer</h1>
            <p className="little">Vercel</p>
            </article>
          </header>
          <p>We are seeking a technical writer to join our team</p>
          <footer className="price">
            <button>Documentation</button>
            <span>$60,000 - $80,000</span>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
