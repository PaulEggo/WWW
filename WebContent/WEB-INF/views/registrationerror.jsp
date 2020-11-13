<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isErrorPage="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Error</title>
</head>
<body>
	<h1 align="center">Product with barcode ${barcode} already exists!</h1><br>
	<form action="<%= request.getContextPath() %>/registrationerror" method="post">
     		<div align="center"><button name="action" value="home">Home</button></div>
	</form>
</body>
</html>