/*
 *
 */
package com.project.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.model.Payment;

@Repository
public class PaymentRepositoryImpl implements PaymentRepository {

	@Autowired
	private SessionFactory sessionFactory;

	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	/*
	 *This method is used to add payment details.
	 */
	@Override
	public void addPayment(Payment payment) {
		getSession().saveOrUpdate(payment);
		System.out.println("Payment recorded successfully in the database.");
	}

}
