<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h3>Welcom to add player</h3>
	
	<form:form method="POST" action="/player/add" modelAttribute="player">
		<div>
			<form:label path="id">Name</form:label>
			<form:input path="id" id="idInput"/>
		</div>
		<div>
			<form:label path="name">Name</form:label>
			<form:input path="name" id="nameInput"/>
		</div>
		<input type="submit" value="Submit"/>
	</form:form>
</body>
</html>