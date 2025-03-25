import styles from "./Home.module.css";
import velikiPlaviLogo from "../assets/veliki_plavi_logo.svg";
import { NavLink } from "react-router-dom";
import zasloni from "../assets/zaslonipng.png";
import gbp_profil2 from "../assets/gbppng2.png";

function Home() {
  return (
    <>
      <div className={styles.usluge}>
        <div className={styles.naslovna}>
          <img
            className={styles.logo}
            src={velikiPlaviLogo}
            alt="Veliki logo"
          />
          <div className={styles.naslovni_tekst}>
            <h1>Brzo i jednostavno do web stranice</h1>
            <p>
              Uz jednostavnu komunikaciju do web stranice u roku već od samo{" "}
              <span>5 dana</span>, s besprijekornim održavanjem.
            </p>
            <NavLink to="/kontakt">Kontaktiraj nas</NavLink>
          </div>
        </div>
        <div className={styles.slika_razmak}>
          <img
            src={zasloni}
            className={styles.zasloni}
            alt="Slika responzivnosti na PC, laptopu & mobilnom uređaju"
          />
        </div>
        <div className={styles.web_stranice}>
          <div className={styles.naslov_usluge}>
            <h3>
              <span>/</span>
              <span>/</span>izrada web stranice
            </h3>
          </div>
          <div className={styles.tekst}>
            <p>
              Vaša web stranica nastaje na bazi tehnologija HTML, CSS, SCSS,
              Tailwind, Bootstrap, Javascript & React.
            </p>
            <p>
              Pristup izrade web stranica koji se automatski prilagođava
              različitim rezolucijama i oblicima ekrana, kao što su monitori,
              prijenosna računala, tableti i pametni telefoni.
            </p>
            <p>
              Prije nego što web stranica postane aktivna, nužno je provesti
              testiranje kako bi se osigurala funkcionalnost na svim platformama
              i uređajima. Testira se na Google Chrome, Mozilla Firefox, Safari,
              Opera, Brave Browser.
            </p>
          </div>
          <div className={styles.postupak_usluge}>
            <div className={styles.podnaslov}>
              <h4>Postupak usluge</h4>
            </div>
            <div className={styles.tekst}>
              <p>
                <span>Kreiranje sadržaja: </span>
                sadržaj za web stranicu, uključuje tekst, slike, videozapise i
                ostale elemente koji će privući posjetitelje i pružiti korisne
                informacije. Ukoliko imate svoj sadržaj po želji, slobodno nam
                priložite.
              </p>
              <p>
                <span>Dizajn i razvoj: </span>
                razvoj web stranice, koristeći tehnologije otvorenog koda.
              </p>
              <p>
                <span>Optimizacija za tražilice (SEO): </span>
                uključuje odabir odgovarajućih ključnih riječi, optimizaciju
                meta opisa, naslova i tehničku optimizaciju stranice kako bi web
                stranica kotirala što bolje na google ili drugoj internet
                tražilici.
              </p>
              <p>
                <span>Testiranje i provjera: </span>
                Web stranica će se temeljito testirati kako bi se osiguralo da
                je funkcionalna, brza i bez grešaka na različitim preglednicima
                i uređajima.
              </p>
              <p>
                <span>Objavljivanje: </span>
                Nakon testiranja i odobrenja klijenta, web stranica će se
                objaviti na internetu i postati dostupna javnosti.
              </p>
              <p>
                Izrada web stranice traje između 5 i 20 dana, ovisno o
                složenosti vašeg projekta.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slika_razmak}>
          <img
            src={gbp_profil2}
            className={styles.gbp_slika}
            alt="Slika Google Business Profila"
          />
        </div>
        <div className={styles.gbp}>
          <div className={styles.naslov_usluge}>
            <h3>
              <span>/</span>
              <span>/</span>izrada google business profila
            </h3>
          </div>
          <div className={styles.tekst}>
            <p>
              Google Business račun omogućuje vam da svoje poslovanje stavite na
              kartu i olakšate korisnicima pronalazak vašeg poduzeća putem
              Google pretraživača i Google mape.
            </p>
            <p>
              Osiguravamo da vaš Google Business profil bude potpuno
              optimiziran, pružajući vašim klijentima ključne informacije o
              vašem poslovanju poput radnog vremena, lokacije, recenzija, slike
              vašeg radnog prostora...
            </p>
          </div>
          <div className={styles.postupak_usluge}>
            <div className={styles.podnaslov}>
              <h4>Postupak usluge</h4>
            </div>
            <div className={styles.tekst}>
              <p>
                Izrada vašeg Google Business profila s potpunim informacijama o
                vašem poduzeću.
              </p>
              <p>
                Postavljanje prilagođene adrese za Google Maps kako bi vaši
                klijenti lako pronašli vašu lokaciju.
              </p>
              <p>
                Poboljšanje SEO (optimizacija za tražilice) vašeg profila kako
                bi se povećala vidljivost vašeg poslovanja online.
              </p>
              <p>
                Savjetovanje o najboljim praksama za održavanje i ažuriranje
                vašeg Google Business profila.
              </p>
              <p>
                Izrada google business profila traje par sati, tako da je profil
                spreman isti dan.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.domene}>
          <div className={styles.naslov_usluge}>
            <h3>
              <span>/</span>
              <span>/</span>domene
            </h3>
          </div>
          <div className={styles.tekst}>
            <p>
              Domena označava jedinstvenu adresu na Internetu koju korisnici
              upisuju u preglednik kada žele pristupiti Vašoj web stranici i
              čini sastavni dio identiteta Vaše tvrtke. Domene se u većini
              slučajeva registriraju na period od jedne godine.
            </p>
          </div>
          <div className={styles.registracija_domene}>
            <div className={styles.podnaslov}>
              <h4>REGISTRACIJA BESPLATNE .hr DOMENE</h4>
            </div>
            <div className={styles.tekst}>
              <p>
                Pravo na registraciju besplatne .hr domene imaju sve pravne
                osobe registrirane u RH i fizičke osobe koje obavljaju
                registriranu djelatnost u RH.
              </p>
              <p>
                Za registraciju potrebni su nam podaci kao što su: ime i prezime
                ili podaci o tvrtka / obrt / udruga, OIB, adresa i broj
                telefona.
              </p>
              <p>
                Tristoposto.hr kao administrativna i tehnička osoba vodi brigu
                oko datuma isteka domene i šalje Vam obavijesti o isteku usluge
                na email zajedno sa predračunom za nastavak usluge.
              </p>
            </div>
            <div className={styles.podnaslov}>
              <h4>REGISTRACIJA OSTALIH NAPLATNIH DOMENA</h4>
            </div>
            <div className={styles.tekst}>
              <p>
                Na tržištu su dostupne razne domene, pa tako i plaćene .hr
                domene ukoliko se rubrika “besplatne domene” iznad, ne odnosi na
                vaš slučaj. Na ovome linku možete provjeriti dostupnost i cijene
                raznih završnih domena. Domena koju ovdje spominjemo, .hr iznosi
                otprilike 70€ godišnje registracije.
              </p>
              <p>
                Postoji puno različitih vrsta domena, a njihove cijene značajno
                variraju. Najpopularnija među njima i dalje je .com, čija
                godišnja registracija iznosi otprilike 11€ te se smatra odličnom
                cijenom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
