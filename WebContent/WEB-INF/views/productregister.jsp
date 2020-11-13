<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Registration</title>
</head>
<body>
	<div align="center">
		<h1>Product Registration Form</h1>
		<form action="<%= request.getContextPath() %>/register" method="post">
			<table>
				<tr>
					<td>Barcode</td>
					<td><input type="text" name="barcode"></td>
				</tr>
				<tr>
					<td>Name</td>
					<td><input type="text" name="name"></td>
				</tr>
				<tr>
					<td>Color</td>
					<td><input type="text" name="color"></td>
				</tr>
				<tr>
					<td>Description</td>
					<td><input type="text" name="description"></td>
				</tr>
			</table><br>
			<input type="submit" value="Submit">
		</form>
	</div>
</body>
</html>