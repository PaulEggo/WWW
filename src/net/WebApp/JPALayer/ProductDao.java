package net.WebApp.JPALayer;
import java.sql.*;


import java.util.ArrayList;
import java.util.List;

import net.WebApp.model.Product;

public class ProductDao {

	public int registerProduct(Product product) throws ClassNotFoundException{
		String INSERT_PRODUCTS_SQL = "INSERT INTO product" +
				" (barcode, name, color, description) VALUES " +
				" (?, ?, ?, ?);";
		
		String CHECK_ENTRY = "SELECT * FROM product WHERE barcode=" + product.getBarcode();
		
		int result = 0;

		Class.forName("com.mysql.jdbc.Driver");	
		try {
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/webapp?useSSl=false", 
					"root", "1234");
			
			PreparedStatement check_ps = connection.prepareStatement(CHECK_ENTRY);
			ResultSet rs = check_ps.executeQuery();
			if(rs.next()) {
				return -1;
			}
			
			PreparedStatement ps = connection.prepareStatement(INSERT_PRODUCTS_SQL);
			
			ps.setInt(1, product.getBarcode());
			ps.setString(2, product.getName());
			ps.setString(3, product.getColor());
			ps.setString(4, product.getDescription());
			
			result = ps.executeUpdate();
			connection.close();
		} catch(SQLException e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
	public List<Product> getAll() throws ClassNotFoundException{
		String GET_ALL = "SELECT * FROM product";
		
		Class.forName("com.mysql.jdbc.Driver");	
		try {
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/webapp?useSSl=false", 
					"root", "1234");
			
			
			Statement ps = connection.createStatement();
			ResultSet rs = ps.executeQuery(GET_ALL);
			List<Product> list = new ArrayList<Product>(); 
			while(rs.next()) {
				Product product = new Product();
				
				product.setBarcode(rs.getInt("barcode"));
				product.setName(rs.getString("name"));
				product.setColor(rs.getString("color"));
				product.setDescription(rs.getString("description"));
				list.add(product);
			}
			
			connection.close();
			return list;
		} catch(SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
}
