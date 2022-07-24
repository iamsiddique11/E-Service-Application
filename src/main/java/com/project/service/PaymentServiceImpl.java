/*
 * 
 */
package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.model.Payment;
import com.project.repository.CustomerRepository;
import com.project.repository.PaymentRepository;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	PaymentRepository paymentRepository;

	/*
	 *
	 */
	@Override
	public void addPayment(Payment payment) {
		paymentRepository.addPayment(payment);
	}

}
