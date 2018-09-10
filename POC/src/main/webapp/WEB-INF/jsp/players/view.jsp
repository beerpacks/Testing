<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<c:forEach var="singlePlayer" items="${list}">
	<p>
		<div>id:<c:out value="${singlePlayer.id}"/> name:<c:out value="${singlePlayer.name}"/></div>
</c:forEach>