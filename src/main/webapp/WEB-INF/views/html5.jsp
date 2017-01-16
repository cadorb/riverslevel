<%@ page language="java" pageEncoding="UTF-8" %>
<%--
  @Author: Blaise Cador
  Date: 20/12/2016
--%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ include file="globals/header.jsp" %>
<body>
Glissez/Lachez les serveurs dans une zone :<br>
<div id="box1" class="box" ondragover="return false" ondrop="drop(this, event)">
    <p>Serveur disponibles</p>
    <div id="srv1" class="column" draggable="true" ondragstart="drag(this, event)"><header>LDAP</header>
        Package 1<br />
        Package 2<br />
        Package 3<br />
    </div>
    <div id="srv2" class="column" draggable="true" ondragstart="drag(this, event)"><header>AD</header>
        Package 1<br />
        Package 2<br />
        Package 3<br />
    </div>
    <div id="srv3" class="column" draggable="true" ondragstart="drag(this, event)"><header>SQL</header>
        Package 1<br />
        Package 2<br />
        Package 3<br />
    </div>
</div>



<div id="box2" class="box" ondragover="return false" ondrop="drop(this, event)">
    <p>Infrastructure</p>
</div>


<div class="clear"></div>





<%@ include file="globals/links/dragndrop.jsp" %>
<%@ include file="globals/footer.jsp" %>
</body>
</html>