"use client";

import React, { useState } from 'react';
import styles from '../contact.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(null); // null = pas encore vérifié

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value) || value === ''); // Pas d'erreur si le champ est vide
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  return (
    <div className={styles.contactFormSection}>
      <h2>Contactez-nous</h2>
      <p className={styles.contactText}>
        Remplissez le formulaire ci-dessous pour nous envoyer votre demande ou pour toute question.
      </p>
      <form className={styles.contactForm}>
        {/* Champ Email */}
        <div
          className={`${styles.formGroup} ${
            isValidEmail === false ? styles.error : isValidEmail === true ? styles.valid : ''
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
            onBlur={handleEmailBlur}
            required
          />
        </div>

        {/* Champ Nom */}
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom Prénom*</label>
          <input type="text" id="name" name="name" placeholder="Votre nom et prénom" required />
        </div>

        {/* Champ Téléphone */}
        <div className={styles.formGroup}>
          <label htmlFor="phone">Téléphone*</label>
          <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" required />
        </div>

        {/* Sélection Entreprise */}
        <div className={styles.formGroup}>
          <label htmlFor="company">Entreprise*</label>
          <select id="company" name="company" required>
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
          ></textarea>
        </div>

        {/* Bouton d'envoi */}
        <button type="submit" className={styles.submitButton}>
          ENVOYER LA DEMANDE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
