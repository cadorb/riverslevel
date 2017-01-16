function supprimerPerimetre(){
	
//////////////////////////////////////// On commence par supprimer les informations existantes ////////////////////////////////////////
	info = document.getElementById("info"); //Noeud parent
	perimetre_associe = document.getElementById("perimetre_associe"); // Ce qu'on supprime
	info.removeChild(perimetre_associe);
	
	perimetre_associe_info = document.getElementById("perimetre_associe_info"); //Noeud parent
	info_asso = document.getElementById("info_asso"); // Ce qu'on supprime
	perimetre_associe_info.removeChild(info_asso);
	
	//On supprime le boutton "supprimer"
	supprPeri = document.getElementById("supprPeri"); //Noeud parent
	supprimerPerimetreBoutton = document.getElementById("supprimerPerimetreButton"); // Ce qu'on supprime
	supprPeri.removeChild(supprimerPerimetreBoutton);
	
//////////////////////////////////////// Puis on créer une nouvelle sélection ////////////////////////////////////////
	var titreAssocierPerimetre = $("<h4></h4>");
	$(titreAssocierPerimetre).attr({"class" : "associer_perimetre", "id" : "associer_perimetre" }).appendTo(info);
	var textAssocierPerimetre = $(document.createTextNode("Associer un périmètre"));
	$(textAssocierPerimetre).appendTo(titreAssocierPerimetre);
	
	var cadreAssocierPerimetre = $("<div></div>");
	$(cadreAssocierPerimetre).attr({"class" : "associer_perimetre_liste", "id" : "associer_perimetre_liste" }).appendTo(info);
	
	var formRechercheListe = $("<form></form>");
	$(formRechercheListe).attr({"class" : "row form-horizontalRechercheListe", "id" : "myFormListe", "role" : "form" }).appendTo(cadreAssocierPerimetre);
	
	var inputRechercheListe = $("<input></input>");
	$(inputRechercheListe).attr({"class" : "form-control", "type" : "text",  "id" : "inputRechercherPerimetre", "placeholder" : "Rechercher un périmètre" }).appendTo(formRechercheListe);
	
	var nomPerimetre = $("<p></p>");
	$(nomPerimetre).attr({"class" : "marge2"}).appendTo(cadreAssocierPerimetre);
	var textNomPerimetre = $(document.createTextNode("Nom du périmètre + Version (GxRxCxx)"));
	$(textNomPerimetre).appendTo(nomPerimetre);
	
	var creerPerimetreBouton = $("<button></button>");
	$(creerPerimetreBouton).attr({"type" : "button", "class" : "btn btn-default btn-xs", "id" : "creer_peri", "data-toggle" : "modal", "data-target" : "#myModal"}).appendTo(info);
	var textCreerPerimetre = $(document.createTextNode("Créer un périmètre"));
	$(textCreerPerimetre).appendTo(creerPerimetreBouton);
}

function supprimer(){
	
}
