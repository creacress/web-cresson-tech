import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
require('dotenv').config();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name, phone, company, comments } = body;

    // Vérifiez les champs obligatoires
    if (!email || !name || !phone || !company) {
      return NextResponse.json({ error: "Tous les champs obligatoires doivent être remplis." }, { status: 400 });
    }

    // Configurez le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        debug: true, // Logs détaillés
        logger: true, // Active le logger
      },
    });

    // E-mail à l'administrateur ou destinataire principal
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nouvelle soumission de formulaire de ${name}`,
      text: `
        Détails de la soumission :
        - Nom : ${name}
        - Email : ${email}
        - Téléphone : ${phone}
        - Entreprise : ${company}
        - Commentaires : ${comments}
      `,
    };

    // E-mail de confirmation à l'utilisateur
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // E-mail de l'utilisateur
      subject: "Confirmation de votre soumission",
      text: `
        Bonjour ${name},

        Merci d'avoir pris contact avec nous. Nous avons bien reçu votre demande et nous reviendrons vers vous dans les plus brefs délais.

        Voici un récapitulatif de votre message :
        - Nom : ${name}
        - Email : ${email}
        - Téléphone : ${phone}
        - Entreprise : ${company}
        - Commentaires : ${comments}

        Cordialement,
        L'équipe Cresson-Tech
      `,
    };

    // Envoyer les deux e-mails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Emails envoyés avec succès !" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi des emails :", error);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  }
}
