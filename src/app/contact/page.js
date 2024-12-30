"use client";

import React, { useState } from "react";
import styles from "../contact.module.css";

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [comments, setComments] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [status, setStatus] = useState(null); // "success", "error", or null

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
        // Reset fields
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
    <div className={styles.contactFormSection}>
      <h2>Contactez-nous</h2>
      <p className={styles.contactText}>
        Remplissez le formulaire ci-dessous pour nous envoyer votre demande ou pour toute question.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        {/* Champ Email */}
        <div
          className={`${styles.formGroup} ${
            isValidEmail === false ? styles.error : isValidEmail === true ? styles.valid : ""
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
        <button type="submit" className={styles.submitButton}>
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
  );
};

export default ContactForm;
