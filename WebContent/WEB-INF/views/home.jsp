<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Home Page</title>
</head>
<body>
	<h1 align="center">Web Application</h1><br>
	<form action="<%= request.getContextPath() %>/home" method="post">
		<table align="center">
			<tr>
				<td><button name="action" value="register" >Register Product</button></td>
				<td><button name="action" value="list">View Product List</button></td>
			</tr>
		</table>	
	</form>
</body>
</html>