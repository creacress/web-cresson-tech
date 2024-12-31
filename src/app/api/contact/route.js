export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, phone, company, comments } = req.body;

    try {
      // Vérifiez les champs obligatoires
      if (!email || !name || !phone || !company) {
        return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
      }

      // Configurez le transporteur Nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
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

      // Envoi de l'email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      return res.status(500).json({ error: "Erreur interne du serveur." });
    }
  } else {
    // Si la méthode n'est pas POST
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée." });
  }
}
