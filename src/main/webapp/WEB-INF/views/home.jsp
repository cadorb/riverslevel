<%@ page language="java" pageEncoding="UTF-8" %>
<%--
  @Author: Blaise Cador
  Date: 14/11/2016
--%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ include file="globals/header.jsp" %>

<!----------------------------------------------------------- D�but section ------------------------------------------------------------------>

<section class="cadre_globale">
    <div class="info" id="perimetre_demande">
        <article>
            <!---------------------------------------------------- Cadre gauche ----------------------------------------------------------->

            <!----------------------------------------- Recherche ---------------------------------------->
            <form class="row form-horizontalRechercheListe" role="form"
                  id="myForm">
                <input type="text" class="form-control"
                       id="inputRechercherPerimetreDemande" placeholder="Rechercher">
            </form>
            <p>Affichage des p�rim�tres et de leurs demandes en cours :</p>

            <p>
					<span class="marge"><a href="preview_perimeter">Nom du
							p�rim�tre</a> + Version (GxRxCxx) : </span>
            </p>
            <ul>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
            </ul>

            <p>
					<span class="marge"><a href="preview_perimeter">Nom du
							p�rim�tre</a> + Version (GxRxCxx) : </span>
            </p>
            <ul>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
            </ul>

            <p>
					<span class="marge"><a href="preview_perimeter">Nom du
							p�rim�tre</a> + Version (GxRxCxx) : </span>
            </p>
            <ul>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
                <li><span class="marge2"><a href="preview_request">Nom
								de la demande</a> + Version (GxRxCxx) + Statut de la demande </span></li>
            </ul>
        </article>
    </div>

    <div class="info" id="nom_perimetre">
        <!--------------------------------------- Cadre bas gauche ---------------------------------------------->

        <!----------------------------------------- Recherche un p�rim�tre ---------------------------------------->
        <form class="row form-horizontalRechercheListe" role="form"
              id="myForm">
            <input type="text" class="form-control"
                   id="inputRechercherPerimetre" placeholder="Rechercher un p�rim�tre">
        </form>
        <article>
            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>
            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>
            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>
            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>
            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>
            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>

            <p>
                <a href="preview_perimeter">Nom du p�rim�tre</a> + Version
                (GxRxCxx)
            </p>

        </article>
    </div>

    <div class="info" id="nom_demande">
        <!---------------------------------------- Cadre bas droite -------------------------------------------------->

        <!----------------------------------------- Recherche une demande ---------------------------------------->
        <form class="row form-horizontalRechercheListe" role="form"
              id="myForm">
            <input type="text" class="form-control" id="inputRechercherDemande"
                   placeholder="Rechercher une demande">
        </form>
        <article>
            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

            <p>
                <a href="preview_request">Nom de la demande</a> + Version (GxRxCxx)
                + Statut de la demande
            </p>

        </article>
    </div>
</section>


<!----------------------------------------------------------- Fin section ------------------------------------------------------------------>

<%@ include file="globals/footer.jsp" %>
</body>
</html>
