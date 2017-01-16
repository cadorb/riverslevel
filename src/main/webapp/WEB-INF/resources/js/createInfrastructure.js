var maxServer = 0;
var maxPackage = 0;
var maxComponant = 0;

function createServer(){
//	var myForm = document.getElementById("myFormInfra");
	
//	var nbServers = $('.addServer').length;
//	listServer = $(".addServer");
//	for (var j = 0; j<listServer.length ;j++){
//		srv = listServer[j];
//		srvId = srv.getAttribute("id");
//		srvIndex = srvId.substring(srvId.lastIndexOf("_") + 1, srvId.length) * 1;
//		if (srvIndex > maxServer)  {
//			maxServer = srvIndex;
//		}
//	}
	
	var addServer = $("<div></div>");	
//	$(addServer).attr({"class" : "addServer", "role" : "addServer", "id" : "myFormServer_" + (maxServer +1) }).appendTo(myForm);
//	
//	var labelServer = $("<label></label>");
//	$(labelServer).attr({"for" : "inputNomServeur", "class" : "control-formInfra", "id" : "labelServeur" }).appendTo(addServer);
//	var textLabelServer = $(document.createTextNode("Serveur"));
//	$(textLabelServer).appendTo(labelServer);
	
	var inputNomServer = $("<form:input>");
	$(inputNomServer).attr({"path" : "server", "class" : "form-control" }).appendTo(addServer);
	
//	var addPackageBouton = $("<form:button>");
//	$(addPackageBouton).attr({"type" : "button", "class" : "btn btn-default btn-xs", "id" : "ajouterPackageBouton", "onClick" : "ajouterPackage('myFormServeur_" + (maxServeur +1) +"');" }).appendTo(addServer);
//	var textPackage = $(document.createTextNode("Ajouter un package"));
//	$(textPackage).appendTo(addPackageBouton);

}

function createPackage(myServer){
	
	var myFormServerId = ($("#" + myServer)[0]);
	
	var nbPackages = $('.addPackage').length;
	listPackage = $(".addPackage");
	for (var j = 0; j<listPackage.length ;j++){
		package = listPackage[j];
		packageId = package.getAttribute("id");
		packageIndex = packageId.substring(packageId.lastIndexOf("_") + 1, packageId.length) * 1;
		if (packageIndex > maxPackage)  {
			maxPackage = packageIndex;
		}
	}

	var ajouterPackage = $("<form></form>");	
	$(ajouterPackage).attr({"class" : "addPackage", "role" : "addPackage", "id" : "myFormPackage_" + (maxPackage +1) }).appendTo(myFormServerId);
	
	var divFormGroup = $("<div></div>");
	$(divFormGroup).attr({"class" : "form-group", "id" : "form-group" }).appendTo(ajouterPackage);
	
	var div2 = $("<div></div>");
	$(div2).attr({"class" : "col-sm-offset-2 col-sm-10", "id" : "div2" }).appendTo(divFormGroup);
	
	var imgSuppr = $("<img>");
	$(imgSuppr).attr({"src" : "resources/img/supprimer.jpg", "style" : "width:20px;height:20px;position:relative;float:right;cursor:pointer;margin-right:34%;margin-top:10px;", "alt" : "delete", "id" : "del", "onClick" : "deletePackage('myFormPackage_" + (maxPackage +1) +"');" }).appendTo(div2);
	
	var labelPackage = $("<label></label>");
	$(labelPackage).attr({"for" : "inputNomPackage", "class" : "col-sm-2 control-label", "id" : "labelPackage" }).appendTo(div2);
	var textLabelPackage = $(document.createTextNode("Package"));
	$(textLabelPackage).appendTo(labelPackage);
	
	var inputNomPackage = $("<input>");
	$(inputNomPackage).attr({"type" : "text", "class" : "form-control", "id" : "inputNomPackage", "placeholder" : "Nom package" }).appendTo(div2);
	
	var ajouterURLGIT = $("<button>");
	$(ajouterURLGIT).attr({"type" : "button", "class" : "btn btn-default btn-xs", "id" : "ajouterUrlGitPackage", "data-toggle" : "modal", "data-target" : "#myModal"}).appendTo(div2);
	var textURLGIT = $(document.createTextNode("Ajouter URL GIT"));
	$(textURLGIT).appendTo(ajouterURLGIT);
	
	var ajouterComposantBouton = $("<button>");
	$(ajouterComposantBouton).attr({"type" : "button", "class" : "btn btn-default btn-xs", "id" : "ajouterComposantBouton", "onClick" : "addComponant('myFormPackage_" + (maxPackage +1) +"');" }).appendTo(div2);
	var textComposant = $(document.createTextNode("Ajouter un composant"));
	$(textComposant).appendTo(ajouterComposantBouton);

}

function createComposant(myPackage){

	var myFormPackageId = ($("#" + myPackage)[0]);

	var nbComposants = $('.addComposant').length;
	listComposant = $(".addComposant");
	for (var j = 0; j<listComposant.length ;j++){
		composant = listComposant[j];
		composantId = composant.getAttribute("id");
		composantIndex = composantId.substring(composantId.lastIndexOf("_") + 1, composantId.length) * 1;
		if (composantIndex > maxComposant)  {
			maxComposant = composantIndex;
		}
	}
	
	var ajouterComposant = $("<form></form>");	
	$(ajouterComposant).attr({"class" : "addComposant", "role" : "addComposant", "id" : "myFormComposant_" + (maxComposant +1) }).appendTo(myFormPackageId);
	
	var divFormGroup = $("<div></div>");
	$(divFormGroup).attr({"class" : "form-group", "id" : "form-group" }).appendTo(ajouterComposant);
	
	var div2 = $("<div></div>");
	$(div2).attr({"class" : "col-sm-offset-2 col-sm-10", "id" : "div2" }).appendTo(divFormGroup);
	
	var imgSuppr = $("<img>");
	$(imgSuppr).attr({"src" : "resources/img/supprimer.jpg", "style" : "width:20px;height:20px;position:relative;float:right;cursor:pointer;margin-right:34%;margin-top:10px;", "alt" : "supprimer", "id" : "suppr", "onClick" : "supprimerComposant('myFormComposant_" + (maxComposant +1) +"');" }).appendTo(div2);
	
	var labelComposant = $("<label></label>");
	$(labelComposant).attr({"for" : "inputComponantName", "class" : "col-sm-2 control-label", "id" : "labelComposant" }).appendTo(div2);
	var textLabelComposant = $(document.createTextNode("Composant"));
	$(textLabelComposant).appendTo(labelComposant);
	
	var inputNomComposant = $("<input>");
	$(inputNomComposant).attr({"type" : "text", "class" : "form-control", "id" : "inputComponantName", "placeholder" : "Nom composant" }).appendTo(div2);
	
	var ajouterURLGIT = $("<button>");
	$(ajouterURLGIT).attr({"type" : "button", "class" : "btn btn-default btn-xs", "id" : "ajouterUrlGitComposant", "data-toggle" : "modal", "data-target" : "#myModalComposant"}).appendTo(div2);
	var textURLGIT = $(document.createTextNode("Ajouter URL GIT"));
	$(textURLGIT).appendTo(ajouterURLGIT);
}

///////////////////////////////////////////////////////// Supprime un élément et ses enfants /////////////////////////////////////////////////////////
function deleteServer(myNode){
	var myForm = document.getElementById("myForm2");
	node = $("#" + myNode)[0];
	myForm.removeChild(node);
}

function deletePackage(myNode){
	node = ($("#" + myNode)[0]);
	node.parentNode.removeChild(node);
}

function deleteComponant(myNode){
	node = ($("#" + myNode)[0]);
	node.parentNode.removeChild(node);
}
