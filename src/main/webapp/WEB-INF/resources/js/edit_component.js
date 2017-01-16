function supprimerPackage(){
	
//////////////////////////////////////// On commence par supprimer les informations existantes ////////////////////////////////////////
	info = document.getElementById("info"); //Noeud parent
	package_associe = document.getElementById("package_associe"); // Ce qu'on supprime
	info.removeChild(package_associe);
	
	package_associe_info = document.getElementById("package_associe_info"); //Noeud parent
	info_asso = document.getElementById("info_asso"); // Ce qu'on supprime
	package_associe_info.removeChild(info_asso);
	
	//On supprime le boutton "supprimer"
	supprDemande = document.getElementById("supprPackage"); //Noeud parent
	supprimerDemandeBouton = document.getElementById("supprimerPackageButton"); // Ce qu'on supprime
	supprDemande.removeChild(supprimerDemandeBouton);
	
//////////////////////////////////////// Puis on créer une nouvelle sélection ////////////////////////////////////////
	
	var titreAssocierPackage = $("<h4></h4>");
	$(titreAssocierPackage).attr({"class" : "associer_package", "id" : "associer_package" }).appendTo(info);
	var textAssocierPackage = $(document.createTextNode("Associer un package"));
	$(textAssocierPackage).appendTo(titreAssocierPackage);
	
	var cadreAssocierPackage = $("<div></div>");
	$(cadreAssocierPackage).attr({"class" : "associer_package_arbo", "id" : "associer_package_arbo" }).appendTo(info);
	
	var formRechercheListe = $("<form></form>");
	$(formRechercheListe).attr({"class" : "row form-horizontalRechercheListe", "id" : "myFormListe", "role" : "form" }).appendTo(cadreAssocierPackage);
	
	var inputRechercheListe = $("<input></input>");
	$(inputRechercheListe).attr({"class" : "form-control", "type" : "text",  "id" : "inputRechercherPackage", "placeholder" : "Rechercher un package" }).appendTo(formRechercheListe);
	
	var nomPackage = $("<p></p>");
	$(nomPackage).attr({"class" : "marge2"}).appendTo(cadreAssocierPackage);
	var textNomPackage = $(document.createTextNode("Ici une arborescence"));
	$(textNomPackage).appendTo(nomPackage);
	
}
