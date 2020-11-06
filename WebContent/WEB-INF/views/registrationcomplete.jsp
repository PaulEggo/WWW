<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>  
<%@page import="net.WebApp.model.Product"%>  
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Registration Complete</title>
</head>
<body>
	<h1 align="center">Product registered successfully with barcode ${barcode}!</h1><br>
	<h1 align="center">Displaying Product List</h1> 
   	<table border ="1" width="500" align="center"> 
   		<tr>
       		<th><b>Barcode</b></th> 
       		<th><b>Name</b></th> 
       		<th><b>Color</b></th>
       		<th><b>Description</b></th> 
       	</tr> 
        <%if(request.getAttribute("list") == null) {
       		return;
       	}
        ArrayList<Product> products =  
            (ArrayList<Product>)request.getAttribute("list"); 
        for(Product s:products){%> 
            <tr> 
               	<td><%=s.getBarcode()%></td> 
               	<td><%=s.getName()%></td> 
               	<td><%=s.getColor()%></td> 
               	<td><%=s.getDescription()%></td> 
           	</tr> 
           <%}%> 
     </table><br>  
     <form action="<%= request.getContextPath() %>/registrationcomplete" method="post">
     		<div align="center"><button name="action" value="home">Home</button></div>
	</form>
</body>
</html>