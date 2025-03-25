/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./Kontakt.module.css";
import emailjs from "@emailjs/browser";

function Kontakt() {
  const currentYear = new Date().getFullYear(); // Dohvaćanje trenutne godine
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lw6aw64",
        "template_9rcbvgp",
        e.target,
        "JliAECstEk6azpkhF"
      )
      .then(
        (result) => {
          setStatus(
            "Vaša poruka je poslana, odgovorit ćemo u najkraćem mogućem roku !"
          );
          e.target.reset();
        },
        (error) => {
          setStatus("Došlo je do greške, pokušajte ponovo.");
        }
      );
  };

  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.up}>
        <div className={styles.left}>
          <ul>
            <li>
              <h2>Kontakt</h2>
            </li>
            <li>
              <p>Mobitel</p>
              <a href="tel:+385996000391">+385 99 600 0391</a>
            </li>
            <li>
              <p>Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@tristoposto.hr"
                target="_blank"
              >
                info@tristoposto.hr
              </a>
            </li>
            <li>
              <p>Adresa</p>
              <a
                href="https://maps.app.goo.gl/Cn61eZEwZBVPuoEd8"
                target="_blank"
              >
                Augusta Šenoe 9, 44330 Novska
              </a>
            </li>
            <li>
              <p>Društvene mreže</p>
              <div className={styles.linkovi}>
                <a
                  href="https://www.instagram.com/tristoposto__/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/tristoposto.frontend"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://wa.me/385996000391" target="_blank">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <h1>
            Trebaš projekt? <br />
            Pošalji brzu poruku <i class="fa-solid fa-rocket"></i>
          </h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input placeholder="Vaše ime" type="text" name="name" required />
            </label>
            <label>
              <input
                placeholder="Vaša email adresa"
                type="email"
                name="email"
                required
              />
            </label>
            <label>
              <textarea
                placeholder="Poruka"
                name="message"
                id="message"
                required
              ></textarea>
            </label>
            <button type="submit">Pošalji</button>
          </form>
        </div>
      </div>
      <div className={styles.down}>
        <p>©{currentYear}</p>
      </div>
    </div>
  );
}

export default Kontakt;
