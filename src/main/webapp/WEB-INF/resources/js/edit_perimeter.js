function supprimerInfrastructure(){
	
//////////////////////////////////////// On commence par supprimer les informations existantes ////////////////////////////////////////
	info = document.getElementById("info"); //Noeud parent
	infra_associe = document.getElementById("infra_associe"); // Ce qu'on supprime
	info.removeChild(infra_associe);
	
	infra_associe_info = document.getElementById("infra_associe_info"); //Noeud parent
	info_asso = document.getElementById("info_asso"); // Ce qu'on supprime
	infra_associe_info.removeChild(info_asso);
	
	//On supprime le boutton "supprimer"
	supprInfra = document.getElementById("supprInfra"); //Noeud parent
	supprimerInfrastructureBouton = document.getElementById("supprimerInfrastructureButton"); // Ce qu'on supprime
	supprInfra.removeChild(supprimerInfrastructureBouton);
	
//////////////////////////////////////// Puis on créer une nouvelle sélection ////////////////////////////////////////
	var titreAssocierInfrastructure = $("<h4></h4>");
	$(titreAssocierInfrastructure).attr({"class" : "associer_infra", "id" : "associer_infra" }).appendTo(info);
	var textAssocierInfrastructure = $(document.createTextNode("Associer une Infrastructure"));
	$(textAssocierInfrastructure).appendTo(titreAssocierInfrastructure);
	
	var cadreAssocierInfrastructure = $("<div></div>");
	$(cadreAssocierInfrastructure).attr({"class" : "associer_infra_liste", "id" : "associer_infra_liste" }).appendTo(info);
	
	var formRechercheListe = $("<form></form>");
	$(formRechercheListe).attr({"class" : "row form-horizontalRechercheListe", "id" : "myFormListe", "role" : "form" }).appendTo(cadreAssocierInfrastructure);
	
	var inputRechercheListe = $("<input></input>");
	$(inputRechercheListe).attr({"class" : "form-control", "type" : "text",  "id" : "inputRechercherInfrastructure", "placeholder" : "Rechercher une infrastructure" }).appendTo(formRechercheListe);
	
	var nomInfrastructure = $("<p></p>");
	$(nomInfrastructure).attr({"class" : "marge2"}).appendTo(cadreAssocierInfrastructure);
	var textNomInfrastructure = $(document.createTextNode("Nom de l'infrastructure + Version (GxRxCxx)"));
	$(textNomInfrastructure).appendTo(nomInfrastructure);
}
