import styles from "./Cjenik.module.css";

function Cjenik() {
  const obicniPaketi = [
    {
      id: 1,
      name: "Standard",
      pages: "Web stranica do 5 stranica",
      due: "Rok isporuke : 5-6 dana",
      price: "300 ",
    },
    {
      id: 2,
      name: "Biznis",
      pages: "Web stranica do 8 stranica",
      due: "Rok isporuke : 5-11 dana",
      price: "420 ",
    },
    {
      id: 3,
      name: "Premium",
      pages: "Web stranica do 12 stranica",
      due: "Rok isporuke : 5-20 dana",

      price: "620 ",
    },
  ];
  const plusPaketi = [
    {
      id: 4,
      name: "Standard",
      plus: "Plus",
      pages: "Web stranica do 5 stranica",
      due: "Rok isporuke : 5-6 dana",
      servicing: "1 godina održavanja",
      price: "400 ",
    },
    {
      id: 5,
      name: "Biznis",
      plus: "Plus",
      pages: "Web stranica do 8 stranica",
      due: "Rok isporuke : 5-11 dana",
      servicing: "1 godina održavanja",
      price: "520 ",
    },
    {
      id: 6,
      name: "Premium",
      plus: "Plus",
      pages: "Web stranica do 12 stranica",
      due: "Rok isporuke : 5-20 dana",
      servicing: "1 godina održavanja",
      price: "720 ",
    },
  ];
  const drugeCijene = [
    {
      id: 1,
      name: "NAKNADNO AŽURIRANJE WEB STRANICE",
      desc: "Dodavanje ili brisanje sadržaja s web stranice bez PLUS paketa. Cijena navedena po satu.",
      price: "15 ",
    },
    {
      id: 2,
      name: "IZRADA GOOGLE BUSINESS PROFILA",
      desc: "Google-ov alat koji omogućuje pregled vaše lokacije, radnog vremena, fotografije vašeg poduzeća, recenzije i drugih korisničkih detalja.",
      price: "60 ",
    },
    {
      id: 3,
      name: "IMPLEMENTACIJA STRANIH JEZIKA na web stranicu",
      desc: "Implementacija stranog jezika u vašu web stranicu je besplatna ukoliko posjedujete prevedeni tekst.",
      price: "60 ",
    },
  ];

  return (
    <div className={styles.cjenik_wrapper}>
      <div className={styles.naslovi}>
        <h1>Cjenik</h1>
        <h2>
          <span>/</span>
          <span>/</span>Paketi
        </h2>
      </div>
      <div className={styles.paketi}>
        <div className={styles.obicni}>
          {obicniPaketi.map((pkt) => (
            <div key={pkt.id} className={styles.paket}>
              <div className={styles.naslov_paketa}>
                <h4>{pkt.name}</h4>
              </div>
              <div className={styles.opis_paketa}>
                <p>{pkt.pages}</p>
                <p>{pkt.due}</p>
              </div>
              <div className={styles.cijena_paketa}>
                <p>
                  CIJENA <span className={styles.cijena}>{pkt.price}</span>€
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.plus}>
          {plusPaketi.map((pktPlus) => (
            <div key={pktPlus.id} className={styles.paket}>
              <div className={styles.naslov_paketa}>
                <h4>
                  {pktPlus.name} <span>{pktPlus.plus}</span>
                </h4>
              </div>
              <div className={styles.opis_paketa}>
                <p>{pktPlus.pages}</p>
                <p>{pktPlus.due}</p>
                <p>{pktPlus.servicing}</p>
              </div>
              <div className={styles.cijena_paketa}>
                <p>
                  CIJENA <span className={styles.cijena}>{pktPlus.price}</span>€
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.artikli}>
        <div className={styles.prviArtikl}>
          <h5>Svaki paket uključuje </h5>
          <p>Besplatan hosting 1 godinu</p>
          <p>SEO optimizaciju</p>
          <p>Responzivan dizajn ( sve vrste ekrana )</p>
          <p>Minimalno 5 stranica</p>
        </div>
        <div className={styles.drugiArtikl}>
          <h5>Po želji & potrebi </h5>
          <p>Unos vaših dostavljenih fotografija i tekstova</p>
          <p>Kontakt forma</p>
          <p>Integrirana Google mapa s vašom lokacijom</p>
          <p>Integriran Google Business profil</p>
        </div>
      </div>
      <div className={styles.druge_cijene}>
        {drugeCijene.map((stavka) => (
          <div key={stavka.id} className={styles.stavka}>
            <div className={styles.naslov_stavke}>
              <h5>{stavka.name}</h5>
            </div>
            <div className={styles.opis_stavke}>
              <p>{stavka.desc}</p>
            </div>
            <div className={styles.cijena_stavke}>
              <p>
                CIJENA <span className={styles.cijena}>{stavka.price}</span>€
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cjenik;
