export async function POST(req) {
  try {
    // Extraire les données de la requête
    const { email, name, phone, company, comments } = await req.json();

    // Validation des champs
    if (!email || !name || !phone || !company) {
      return new Response(
        JSON.stringify({ message: "Tous les champs obligatoires doivent être remplis." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Traitement des données (exemple : affichage dans la console)
    console.log("Données reçues :", { email, name, phone, company, comments });

    // Réponse de succès
    return new Response(
      JSON.stringify({ message: "Formulaire soumis avec succès !" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur côté serveur :", error);

    // Réponse en cas d'erreur
    return new Response(
      JSON.stringify({ message: "Erreur interne du serveur." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
