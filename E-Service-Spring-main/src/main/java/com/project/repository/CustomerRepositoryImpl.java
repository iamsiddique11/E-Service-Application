/*
 *
 */
package com.project.repository;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.model.Customer;

@Repository
public class CustomerRepositoryImpl implements CustomerRepository {
	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	/*
	 *  This method is used to create customers.
	 */
	@Override
	public void createCustomer(Customer customer) {
		getSession().saveOrUpdate(customer);
		System.out.println("Customer registered successfully in the database.");
	}

	/*
	 * This method is used to delete customers.
	 */
	@Override
	public List<Customer> deleteCustomer(int cno) {
		Query query = getSession().createQuery("delete from Customer customer where cid =:cno");
		query.setParameter("cno", cno);
		int noOfRows = query.executeUpdate();
		if (noOfRows > 0) {
			System.out.println("Deleted " + noOfRows + " rows");
		}

		return getAllCustomers();
	}

	/*
	 *  This method is used to view the list of
	 * customers.
	 */
	@Override
	public List<Customer> getAllCustomers() {
		Query query = getSession().createQuery("from Customer customer ");
		List<Customer> clist = query.list();
		System.out.println(clist);
		return clist;
	}

	/*
	 * This method is used to update customers.
	 */
	@Override
	public List<Customer> updateProfile(Customer customer) {
		Query query = getSession().createQuery("update Customer customer set name=:name,phone=:phone where cid=:cid");
		query.setParameter("name", customer.getName());
		query.setParameter("phone", customer.getPhone());
		query.setParameter("cid", customer.getCid());
		int noOfRows = query.executeUpdate();
		if (noOfRows > 0) {
			System.out.println(noOfRows + " row(s) updated.");
		}
		return getAllCustomers();
	}

	/*
	 *  This method is used to fetch customers
	 * by ID.
	 */
	@Override
	public Customer getCustomerById(int cid) {
		Criteria c = getSession().createCriteria(Customer.class);
		c.add(Restrictions.eq("cid", cid));
		Customer customer = (Customer) c.uniqueResult();
		System.out.println("Customer retrieved : " + customer);
		return customer;
	}

	/*
	 * This method is used to fetch customers by
	 * email and password.
	 */
	@Override
	public Customer getCustomerByEmail(String email, String password) {
		Criteria c = getSession().createCriteria(Customer.class);
		c.add(Restrictions.eq("email", email));
		c.add(Restrictions.eq("password", password));
		Customer cm = (Customer) c.uniqueResult();
		System.out.println("Customer retrieved : " + cm);
		return cm;
	}
}