package net.WebApp.JPALayer;
import java.util.List;

import javax.transaction.SystemException;
import javax.transaction.Transaction;

import org.hibernate.Session;

import net.WebApp.model.Product;

public class JPA {
		
	
	public int registerProduct(Product product) throws IllegalStateException, SystemException {
		org.hibernate.Transaction transaction = null;
		try (Session session = HibernateUtil.getSessionFactory().openSession()) {
			Product p_check = session.get(Product.class, product.getBarcode());
			if(p_check != null) {
				return -1;
			}
			transaction = session.beginTransaction();
			session.save(product);
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
			return -1;
		}
		return 1;
	}
	
	
	public List<Product> getAll() throws IllegalStateException, SystemException {
		org.hibernate.Transaction transaction = null;
		List<Product> entries = null;
		try (Session session = HibernateUtil.getSessionFactory().openSession()) {
			transaction = session.beginTransaction();
			entries = session.createQuery("from Product").getResultList();	
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null) {
				transaction.rollback();
			}
			e.printStackTrace();
			return null;
		}
		return entries;
	}
}
