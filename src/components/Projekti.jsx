import styles from "./Projekti.module.css";
import maksis from "../assets/maksis.png";
import uljaraf from "../assets/uljaraf.png";
import pinky from "../assets/pinky.png";
import ibauto from "../assets/ibauto.png";

function Projekti() {
  const projekti = [
    {
      id: 1,
      naziv: "Maksis - knjigovodstveni servis",
      link: "https://maksis.hr/",
      slika: maksis,
    },
    {
      id: 1,
      naziv: "IB Automobili",
      link: "https://ibautomobili.com/",
      slika: ibauto,
    },
    {
      id: 1,
      naziv: "Uljara Franičević",
      link: "https://uljarafranicevic.hr/",
      slika: uljaraf,
    },
    {
      id: 1,
      naziv: "Caffe Bar Pinky",
      link: "https://cbpinky2.hr/",
      slika: pinky,
    },
  ];

  return (
    <div className={styles.projekti_wrapper}>
      <div className={styles.naslov}>
        <h1>Projekti</h1>
      </div>
      <div className={styles.projekti}>
        {projekti.map((pro) => (
          <div className={styles.projekt}>
            <div className={styles.slika}>
              <a className={styles.link} href={pro.link} target="_blank">
                <img src={pro.slika} alt={pro.naziv} />
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div className={styles.naziv_projekta}>
              <h5>{pro.naziv}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projekti;
