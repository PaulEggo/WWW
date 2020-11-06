package net.WebApp.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;

import net.WebApp.dao.ProductDao;
import net.WebApp.model.Product;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	private ProductDao productdao = new ProductDao();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/productregister.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int barcode = Integer.parseInt(request.getParameter("barcode"));
		String name = request.getParameter("name");
		String color = request.getParameter("color");
		String description = request.getParameter("description");
		
		Product product = new Product();
		product.setBarcode(barcode);
		product.setName(name);
		product.setColor(color);
		product.setDescription(description);
		
	
		try {
			int result= productdao.registerProduct(product);
			
			if(result == -1) {
				RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/registrationerror.jsp");
				request.setAttribute("barcode", barcode+"");
				dispatcher.forward(request, response);
			}
			else {			
				RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/views/registrationcomplete.jsp");
				request.setAttribute("barcode", barcode+"");
				request.setAttribute("list", productdao.getAll());
				dispatcher.forward(request, response);
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
