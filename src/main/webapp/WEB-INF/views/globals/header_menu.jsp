<nav id="mainNav" class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="home">
                <span id="app_name">Release Manager</span>
            </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul id="headerMenu" class="nav navbar-nav nav-menu nav-shift">
                <li class="dropdown nav-item">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Infrastructure <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="listInfrastructures">List</a></li>
                        <li><a href="createInfrastructure">New</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Server <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="listServers">List</a></li>
                        <li><a href="createServer">New</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Package <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="listPackages">List</a></li>
                        <li><a href="createPackage">New</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Component <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="listComponents">List</a></li>
                        <li><a href="createComponent">New</a></li>
                    </ul>
                </li>
                <!--li class="nav-item"><a href="create_request" title="open the news menu">Creer demande</a></li>
                <li class="nav-item"><a href="define_perimeter" title="open the news menu">Definir perimetre</a></li>
                <li class="nav-item"><a href="create_component" title="open the news menu">Creer composant</a></li>
                <li class="nav-item"><a href="create_document" title="open the news menu">Creer document</a></li-->
                <li class="nav-item"><a href="admin" title="open the news menu">Administrator</a></li>
                <li class="nav-item" id="id_for_cdu_link"></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>


<!--
<form class="row form-horizontalRecherche" role="form" id="myForm">
<div class="form-group">
<div class="col-sm-10">
<input type="text" class="form-control" id="inputRechercher" placeholder="Rechercher">
</div>
</div>
</form>
-->