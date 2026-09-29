// Formulaire de contact : affiche un message au lieu de recharger la page
const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", function (evenement) {
  evenement.preventDefault();
  const nom = document.getElementById("nom").value;
  document.getElementById("confirmation").textContent = "Merci " + nom + ",  pour me contacter : chamsdine.koudri@epitech.eu";
  formulaire.reset();
});
