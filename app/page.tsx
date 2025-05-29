import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

      <body>
      <header>
        <div className="kontener">
          <div className="h_spaceout">
            <div className="h_main">
              <img src="obr/logo.jpg" alt="Logo" id="h_logo"/>
              <div className="h_nazwa">Przyjaciele rodziny</div>
            </div>
            <div className="h_laczenie">
              <div className="h_ID">Adrian Dratwa (album: 124637)</div>
              <img src="obr/Ja.jpg" alt="Logo" id="h_ja"/>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="kontener">
          <div className="glowny obramowka">
            <div className="tytul">Zwierzęta domowe</div>

            <section>
              <p>
                W wielu Polskich domach znajdują się zwierzęta, które są nieodłączną cześcią tych gospodarstw, z tego
                powodu chciałbym pokazać
                małych członków rodziny którzy są w moim miejscu zamieszkania jak i mych przyjaciół.
              </p>
              <div className="opis">W moim domu znajdują się dwa zwierzaki, cicha zawsze śpiąca kotka Fifa jak i
                nieokiełznana strzała york Daktyl.
              </div>
              <div className="k_wielkosc">

                <div id="karuzela1" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="obr/fifa1.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/fifa2.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/fifa3.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/fifa4.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/fifa5.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/fifa6.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#karuzela1"
                          data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#karuzela1"
                          data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div id="karuzela2" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="obr/daktyl1.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/daktyl2.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/daktyl3.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/daktyl4.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/daktyl5.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/daktyl6.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#karuzela2"
                          data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#karuzela2"
                          data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>
            </section>
            <div className="spaceout"></div>
            <section>

              <div className="opis">Innymi kolegami są dwie grube kotki mojego przyjaciela Maksa oraz mały lecz skoczny
                york Niko Pawła.
              </div>
              <div className="k_wielkosc">

                <div id="karuzela3" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="obr/MK1.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/MK2.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/MK3.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/MK4.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/MK5.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/MK6.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#karuzela3"
                          data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#karuzela3"
                          data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div id="karuzela4" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="obr/PW2.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/pw3.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/PW1.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/PW4.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/PW5.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/PW6.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#karuzela4"
                          data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#karuzela4"
                          data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>
            </section>
          </div>
          <div className="prawy obramowka">
            <div className="tytul">Inne zwierzęta</div>
            <section>

              <div className="opis">Miałem przyjemność uchwycić również inne żywe stworzenia hodowlane jak i dzikie w
                moim otoczeniu.
              </div>
              <div className="k_wielkosc">
                <div id="karuzela5" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="obr/inne1.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/inne2.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/inne3.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/inne4.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/inne5.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                    <div className="carousel-item">
                      <img src="obr/inne6.jpg" className="d-block w-100" alt="..." id="domy"/>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#karuzela5"
                          data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#karuzela5"
                          data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer>
        <div className="kontener">
          <div className="f_main">
            <div className="f_lewa">
              <div className="f_nazwa">
                <img src="obr/logo.jpg" alt="Logo" id="h_logo"/>
                <div className="h_logo">Przyjaciele rodziny</div>
              </div>
              <div className="f_tekst">
                Modele których wizerunek został użyty: Kotka syberyjski Fifa, York Daktyl, York Niko, Kotka Kulka, Kotka
                Gruba
              </div>
            </div>
            <div className="f_prawa">
              <div>Stack technologiczny:</div>
              <div className="f_tekst">
                Wykorzystano HTML, CSS i JS
              </div>
            </div>
          </div>
          <div className="spaceout"></div>
        </div>
      </footer>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
              crossOrigin="anonymous"></script>
      </body>
  );
}