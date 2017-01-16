function supprimerAssociation(){
		//////////////////////////////////////// On commence par supprimer les informations existantes ////////////////////////////////////////
	create_doc = document.getElementById("create_doc"); //Noeud parent
	associe = document.getElementById("associe"); // Ce qu'on supprime
	create_doc.removeChild(associe);
	
	associe_info = document.getElementById("associe_info"); //Noeud parent
	info_asso = document.getElementById("info_asso"); // Ce qu'on supprime
	associe_info.removeChild(info_asso);
	
	//On supprime le boutton "supprimer"
	suppr = document.getElementById("suppr"); //Noeud parent
	supprimerAssociationBoutton = document.getElementById("supprimerAssociationButton"); // Ce qu'on supprime
	suppr.removeChild(supprimerAssociationBoutton);
	
//////////////////////////////////////// Puis on créer une nouvelle sélection ////////////////////////////////////////	
	var titreAssocier = $("<h4></h4>");
	$(titreAssocier).attr({"class" : "associer", "id" : "associer" }).appendTo(create_doc);
	var textAssocier = $(document.createTextNode("Associer"));
	$(textAssocier).appendTo(titreAssocier);
	
	var cadreAssocier = $("<div></div>");
	$(cadreAssocier).attr({"class" : "associer_arbo", "id" : "associer_arbo" }).appendTo(create_doc);
	
	var formRechercheListe = $("<form></form>");
	$(formRechercheListe).attr({"class" : "row form-horizontalRechercheListe", "id" : "myFormListe", "role" : "form" }).appendTo(cadreAssocier);
	
	var inputRechercheListe = $("<input></input>");
	$(inputRechercheListe).attr({"class" : "form-control", "type" : "text",  "id" : "inputRechercherPerimetre", "placeholder" : "Rechercher un périmètre" }).appendTo(formRechercheListe);
	
	var arborescence = $("<p></p>");
	$(arborescence).attr({"class" : "marge2"}).appendTo(cadreAssocier);
	var textArborescence = $(document.createTextNode("Ici une arborescence"));
	$(textArborescence).appendTo(arborescence);
	
}
