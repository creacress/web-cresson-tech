"use client";

import React, { useState, useEffect } from "react";
import styles from "../contact.module.css";
import Head from "next/head"; // Import de Head pour les métadonnées dynamiques

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [comments, setComments] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [status, setStatus] = useState(null); // "success", "error", or null

  // Initialisation de Google Analytics
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-H206EG4TH7"); // Remplacez par votre ID de suivi
    }
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value) || value === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, name, phone, company, comments };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Réinitialiser les champs
        setEmail('');
        setName('');
        setPhone('');
        setCompany('');
        setComments('');
        setIsValidEmail(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Metadonnées pour SEO */}
      <Head>
        <title>Contactez-nous | Cresson Tech</title>
        <meta
          name="description"
          content="Contactez Cresson Tech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques."
        />
        <meta
          name="keywords"
          content="contact, intelligence artificielle, solutions IA, services technologiques, formulaire"
        />
        <meta name="author" content="Cresson Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.contactFormSection}>
        <h1 className={styles.pageTitle}>Contactez-nous</h1>
        <p className={styles.contactText}>
          Remplissez le formulaire ci-dessous pour nous envoyer votre demande ou pour toute question.
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          {/* Champ Email */}
          <div
            className={`${styles.formGroup} ${
              isValidEmail === false
                ? styles.error
                : isValidEmail === true
                ? styles.valid
                : ""
            }`}
          >
            <label htmlFor="email">Mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {isValidEmail === false && (
              <small className={styles.errorText}>Email invalide</small>
            )}
          </div>

          {/* Champ Nom */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom Prénom*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom et prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Champ Téléphone */}
          <div className={styles.formGroup}>
            <label htmlFor="phone">Téléphone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Sélection Entreprise */}
          <div className={styles.formGroup}>
            <label htmlFor="company">Entreprise*</label>
            <select
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            >
              <option value="">Sélectionnez une option</option>
              <option value="PME">PME</option>
              <option value="TPE">TPE</option>
              <option value="ETI">ETI</option>
              <option value="GE">GE</option>
            </select>
          </div>

          {/* Champ Commentaires / Sujet */}
          <div className={styles.formGroup}>
            <label htmlFor="comments">Commentaires / Sujet</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Écrivez votre message ou sujet ici..."
              rows="5"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className={styles.submitButton}
            onClick={() =>
              window.gtag("event", "contact_form_submission", {
                event_category: "Form",
                event_label: "Contact Form Submitted",
              })
            }
          >
            ENVOYER LA DEMANDE
          </button>
        </form>

        {/* Messages de statut */}
        {status === "success" && (
          <div className={styles.successMessage}>
            Merci ! Votre message a été envoyé avec succès.
          </div>
        )}
        {status === "error" && (
          <div className={styles.errorMessage}>
            Une erreur s'est produite. Veuillez réessayer plus tard.
          </div>
        )}
      </div>
    </>
  );
};
