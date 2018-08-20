<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>asdf</title>
</head>
<body>
	tu veux voir les joueurs
	
	        <c:forEach  items="${playerList}" var ="player">

          <td>${player.name}</td>
        </c:forEach>
        <div>j'en ai oublier alors ajoute le <a href="${pageContext.request.contextPath}/player/add">add player</a> </div>
</body>
</html>