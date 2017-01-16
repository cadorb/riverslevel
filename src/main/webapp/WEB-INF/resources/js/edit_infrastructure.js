function cliqueServeur(){
	
	var myServeur = document.getElementById("serveur");

	var ajouterPackage = document.createElement("form");
	ajouterPackage.setAttribute('class','ajouterPackage');
	ajouterPackage.setAttribute('role','ajouterPackage');
	ajouterPackage.setAttribute('id','myFormPackage');
	myServeur.parentNode.insertBefore(ajouterPackage, myServeur.nextSibling);
	
	var divFormGroup= document.createElement("div");
	divFormGroup.setAttribute('class','form-group');
	divFormGroup.setAttribute('id','form-group');
	ajouterPackage.appendChild(divFormGroup);
	
	var div2 = document.createElement("div");
	div2.setAttribute('class','col-sm-offset-2 col-sm-10');
	div2.setAttribute('id','div2');
	divFormGroup.appendChild(div2);
	
	var labelPackage = document.createElement("label");
	labelPackage.setAttribute('for','inputNomPackage');
	labelPackage.setAttribute('class','col-sm-2 control-label');
	labelPackage.setAttribute('id','labelPackage');
	//labelServeur.setAttribute('style','margin-left:70px;');
	var textLabelPackage = document.createTextNode("Package");
	labelPackage.appendChild(textLabelPackage);
	div2.appendChild(labelPackage);
	
	var div3 = document.createElement("div");
	div3.setAttribute('class','col-sm-10');
	div3.setAttribute('id','div3');
	labelPackage.parentNode.insertBefore(div3, labelPackage.nextSibling);
	
	var inputNomPackage = document.createElement("input");
	inputNomPackage.setAttribute('type',"text");
	inputNomPackage.setAttribute('class',"form-control");
	inputNomPackage.setAttribute('id',"inputNomPackage");
	//inputNomServeur.setAttribute('style',"postion:relative;");
	inputNomPackage.setAttribute('placeholder',"Nom Package");
	//div3.appendChild(InputNomServeur);
	div3.parentNode.insertBefore(inputNomPackage, div3.nextSibling);
	
	var ajouterURLGIT = document.createElement("button");
	var textURLGIT = document.createTextNode("Ajouter une URL GIT au package");
	ajouterURLGIT.setAttribute('type',"button");
	ajouterURLGIT.setAttribute('class',"btn btn-default btn-xs");
	ajouterURLGIT.setAttribute('id',"ajouterURLGIT");
	ajouterURLGIT.setAttribute('data-toggle',"modal");
	ajouterURLGIT.setAttribute('data-target',"#myModal");
	ajouterURLGIT.appendChild(textURLGIT);
	inputNomPackage.parentNode.insertBefore(ajouterURLGIT, inputNomPackage.nextSibling);
	
	var ajouterComposantBouton = document.createElement("button");
	var textComposant = document.createTextNode("Ajouter un composant");
	ajouterComposantBouton.setAttribute('type',"button");
	ajouterComposantBouton.setAttribute('class',"btn btn-default btn-xs");
	ajouterComposantBouton.setAttribute('id',"ajouterComposantBouton");
	ajouterComposantBouton.setAttribute('onClick',"ajouterComposant()");
	ajouterComposantBouton.appendChild(textComposant);
	ajouterURLGIT.parentNode.insertBefore(ajouterComposantBouton, ajouterURLGIT.nextSibling);
	
	// supprimer l'élément et ses enfants
	var imgSuppr = document.createElement("img");
	imgSuppr.setAttribute('src','../img/supprimer.jpg');
	imgSuppr.setAttribute('style','width:20px;height:20px;position:relative;float:right;cursor:pointer;margin-right:25%;margin-top:10px;');
	imgSuppr.setAttribute('alt','yolo');
	imgSuppr.setAttribute('onClick',"supprimerElements(myFormPackage);");
	labelPackage.parentNode.insertBefore(imgSuppr, labelPackage.nextSibling);
	//labelPackage.appendChild(imgSuppr);
}

function cliquePackage(){
	var boutonAjouterComposant = document.getElementById("ajouterComposantBouton");
	var myPackage = document.getElementById("package");

	var ajouterComposant = document.createElement("form");
	ajouterComposant.setAttribute('class','ajouterComposant');
	ajouterComposant.setAttribute('role','ajouterComposant');
	ajouterComposant.setAttribute('id','myFormComposant');
	myPackage.parentNode.insertBefore(ajouterComposant, myPackage.nextSibling);
	
	var divFormGroup= document.createElement("div");
	divFormGroup.setAttribute('class','form-group');
	divFormGroup.setAttribute('id','form-group');
	ajouterComposant.appendChild(divFormGroup);
	
	var div2 = document.createElement("div");
	div2.setAttribute('class','col-sm-offset-2 col-sm-10');
	div2.setAttribute('id','div2');
	divFormGroup.appendChild(div2);
	
	var labelComposant = document.createElement("label");
	labelComposant.setAttribute('for','inputNomComposant');
	labelComposant.setAttribute('class','col-sm-2 control-label');
	labelComposant.setAttribute('id','labelComposant');
	//labelServeur.setAttribute('style','margin-left:70px;');
	var textLabelComposant = document.createTextNode("Composant");
	labelComposant.appendChild(textLabelComposant);
	div2.appendChild(labelComposant);
	
	var div3 = document.createElement("div");
	div3.setAttribute('class','col-sm-10');
	div3.setAttribute('id','div3');
	labelComposant.parentNode.insertBefore(div3, labelComposant.nextSibling);
	
	var inputNomComposant = document.createElement("input");
	inputNomComposant.setAttribute('type',"text");
	inputNomComposant.setAttribute('class',"form-control");
	inputNomComposant.setAttribute('id',"inputNomComposant");
	//inputNomServeur.setAttribute('style',"postion:relative;");
	inputNomComposant.setAttribute('placeholder',"Nom Composant");
	//div3.appendChild(InputNomServeur);
	div3.parentNode.insertBefore(inputNomComposant, div3.nextSibling);
	
	// supprimer l'élément et ses enfants
	var imgSuppr = document.createElement("img");
	imgSuppr.setAttribute('src','../img/supprimer.jpg');
	imgSuppr.setAttribute('style','width:20px;height:20px;position:relative;float:right;cursor:pointer;margin-right:20%;margin-top:10px;');
	imgSuppr.setAttribute('alt','yolo');
	imgSuppr.setAttribute('onClick',"supprimerElements(myFormComposant);");
	labelComposant.parentNode.insertBefore(imgSuppr, labelComposant.nextSibling);
	//labelServeur.appendChild(imgSuppr);
}
