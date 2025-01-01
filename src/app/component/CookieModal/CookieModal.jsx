"use client"; // Activer l'interactivité côté client

import { useState, useEffect } from "react";
import styles from "../../CookieModal.module.css";

export default function CookieModal() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);

    // Vous pouvez inclure des actions comme envoyer un événement à Google Analytics ici.
    if (typeof window !== "undefined") {
      window.gtag("event", "cookies_accept", {
        event_category: "User Consent",
        event_label: "Cookies strictement analytiques",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // 10 secondes

    // Nettoyage du timer si le composant est démonté ou si "J'accepte" est cliqué
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div
        className={styles.cookieModal}
        role="dialog"
        aria-labelledby="cookieModalTitle"
        aria-describedby="cookieModalDescription"
      >
        <div className={styles.modalContent}>
          <h2 id="cookieModalTitle" className={styles.modalTitle}>
            Utilisation de cookies
          </h2>
          <p id="cookieModalDescription" className={styles.modalDescription}>
            Ce site utilise des cookies strictement analytiques pour améliorer l'expérience utilisateur. Aucune donnée personnelle n'est collectée ou partagée.
          </p>
          <button className={styles.acceptButton} onClick={handleAccept}>
            J'accepte
          </button>
        </div>
      </div>
    )
  );
}
