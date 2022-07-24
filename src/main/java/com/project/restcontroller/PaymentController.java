/*
 * 
 */
package com.project.restcontroller;

import org.apache.log4j.PropertyConfigurator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

import com.project.model.Payment;
import com.project.service.PaymentService;

@RestController
@RequestMapping(value = "/payment")
@CrossOrigin(origins = "*",allowedHeaders="*",allowCredentials="true", methods = { RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST,
		RequestMethod.DELETE })
public class PaymentController {

	private static final Logger logger = Logger.getLogger(CustomerController.class);

	@Autowired
	PaymentService paymentService;

	/*
	 * This method is used to add payment
	 * details.
	 */
	@PostMapping("/addPayment")
	public Payment addPayment(@RequestBody Payment payment) {
		logger.info("Getting request from localhost to add payment details to the database");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(PaymentController.class.getClassLoader().getResource("log4j.properties"));

		paymentService.addPayment(payment);
		return payment;
	}
}
