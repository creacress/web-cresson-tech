import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, phone, company, comments } = req.body;

    // Configurez le transporteur Nodemailer avec les détails SMTP de Hostinger
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Serveur SMTP de Hostinger
      port: 465, // Port sécurisé (ou 587 pour TLS)
      secure: true, // Utilisez true pour le port 465, false pour 587
      auth: {
        user: process.env.EMAIL_USER, // Adresse email créée sur Hostinger
        pass: process.env.EMAIL_PASS, // Mot de passe de l'email
      },
    });

    // Détails de l'e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // Adresse expéditeur
      to: process.env.EMAIL_RECIPIENT, // Adresse destinataire
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

    try {
      // Envoyer l'e-mail
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur d'envoi de l'email :", error);
      res.status(500).json({ error: "Erreur d'envoi de l'email." });
    }
  } else {
    res.status(405).json({ error: "Méthode non autorisée." });
  }
}
