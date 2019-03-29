import React, { Component } from "react";
import "../homepage.css";
import timeIcon from "../images/timeIcon.png";
import moneyIcon from "../images/moneyIcon.png";
import matchingIcon from "../images/matchingIcon.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div class="split-screen">
          <div class="half-screen">
            <div>
              <div className="banner-text">
                <h1>Espace Étudiant</h1>
                <p>
                  Trouvez le Job étudiant de vos rêves.
                  <br />
                  Essayez la première plateforme tunisienne qui aide les
                  étudiants à trouver un emploi à temps partiel.
                </p>
                <Button
                  component={Link}
                  to={"/register"}
                  className="btn btn-primary default-button"
                >
                  Créer un compte
                </Button>
              </div>
            </div>
          </div>
          <div class="half-screen">
            <div className="banner-text">
              <h1>Espace Entreprise</h1>
              <p>
                À la recherche de nouveaux talents pour du travail temporaire?
                <br />
                Embauchez des étudiants, économisez du temps et de l'argent.
              </p>
              <Button
                component={Link}
                to={"/registerCompany"}
                className="btn btn-primary default-button"
              >
                Créer un compte
              </Button>
            </div>
          </div>
        </div>
        {/* <section className="banner">
          <div className="inner">
            <h1>Industrious</h1>
            <p>
              A responsive business oriented template with a video background
              <br />
              designed by <a href="https://templated.co/">TEMPLATED</a> and
              released under the Creative Commons License.
            </p>
            <div>
              <p>hello you, you really need to cry</p>
            </div>
          </div>
        </section> */}

        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>
                Study or work,
                <br /> now you don't have to choose
              </h2>
              <p>
                Our mission is to help students get a part-time job in a company
                or start-up that best fit their skills and career growth
                desires.
                <br /> Our platform assists businesses in finding their
                requested service by associating them with the appropriate
                profile of the student.
              </p>
            </header>
            <div className="highlights">
              <section>
                <div className="content">
                  <header>
                    <a href="#">
                      <img src={timeIcon} alt="timeIcon" className="icon" />
                    </a>
                    <h3>Save Time</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#">
                      <img src={moneyIcon} alt="moneyIcon" className="icon" />
                    </a>
                    <h3>Save Money</h3>
                  </header>
                  <p>
                    scing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
              <section>
                <div className="content">
                  <header>
                    <a href="#">
                      <img
                        src={matchingIcon}
                        alt="matchingIcon"
                        className="icon"
                      />
                    </a>
                    <h3>Profile Matching</h3>
                  </header>
                  <p>
                    Nunc lacinia ante nunc ac lobortis ipsum. Interdum
                    adipiscing gravida odio porttitor sem non mi integer non
                    faucibus.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="cta" className="wrapper">
          <div className="inner">
            <h2>Curabitur ullamcorper ultricies</h2>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing. Lorem ipsum
              dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit
              adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu
              faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac
              gravida.
            </p>
          </div>
        </section>

        <section className="wrapper">
          <div className="inner">
            <header className="special">
              <h2>Faucibus consequat lorem</h2>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor.
              </p>
            </header>
          </div>
        </section>

        <footer className="footer">
          <div className="inner">
            <div className="content">
              <section>
                <h3>Accumsan montes viverra</h3>
                <p>
                  Nunc lacinia ante nunc ac lobortis. Interdum adipiscing
                  gravida odio porttitor sem non mi integer non faucibus ornare
                  mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia
                  sapien lorem accumsan varius montes viverra nibh in
                  adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in
                  faucibus vestibulum. Blandit adipiscing eu felis iaculis
                  volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed
                  amet praesent. Nunc lacinia ante nunc ac gravida.
                </p>
              </section>
              <section>
                <h4>Sem turpis amet semper</h4>
                <ul className="alt">
                  <li>
                    <a href="#">Dolor pulvinar sed etiam.</a>
                  </li>
                  <li>
                    <a href="#">Etiam vel lorem sed amet.</a>
                  </li>
                  <li>
                    <a href="#">Felis enim feugiat viverra.</a>
                  </li>
                  <li>
                    <a href="#">Dolor pulvinar magna etiam.</a>
                  </li>
                </ul>
              </section>
              <section>
                <h4>Magna sed ipsum</h4>
                <ul className="plain">
                  <li>
                    <a href="#">
                      <i className="icon fa-twitter">&nbsp;</i>Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon fa-facebook">&nbsp;</i>Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon fa-instagram">&nbsp;</i>Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon fa-github">&nbsp;</i>Github
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="copyright">
              &copy; Untitled. Photos <a href="https://unsplash.co">Unsplash</a>
              , Video <a href="https://coverr.co">Coverr</a>.
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
