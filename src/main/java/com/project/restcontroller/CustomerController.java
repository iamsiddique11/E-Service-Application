/*
 * 
 */
package com.project.restcontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Customer;
import com.project.model.Orders;
import com.project.model.Payment;
import com.project.repository.OrderRepository;
import com.project.service.CustomerService;
import com.project.service.OrderService;
import com.project.service.PaymentService;

@RestController
@RequestMapping(value = "/customer")
@CrossOrigin(origins = "*", allowedHeaders="*",allowCredentials="true", methods = { RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST,
		RequestMethod.DELETE })
public class CustomerController {
	private static final Logger logger = Logger.getLogger(CustomerController.class);

	@Autowired
	CustomerService customerService;

	/*
	 * This method is used to create customers.
	 */
	@PostMapping("/createCustomer")
	public Customer createCustomer(@RequestBody Customer customer) {
		logger.info("Getting request from localhost to add customer to the database");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(CustomerController.class.getClassLoader().getResource("log4j.properties"));

		customerService.createCustomer(customer);
		return customer;
	}

	/*
	 * This method is used to fetch customers by
	 * email and password.
	 */
	@PostMapping("/getCustomerByEmail")
	public Customer loginCustomer(@RequestBody Customer customer) throws Exception {
		logger.info("Getting request from localhost to check if customer data is present in the database");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(CustomerController.class.getClassLoader().getResource("log4j.properties"));
		String tempEmail = customer.getEmail();
		String tempPassword = customer.getPassword();
		Customer cust = null;
		if (tempEmail != null && tempPassword != null) {
			cust = customerService.getCustomerByEmail(tempEmail, tempPassword);
		}
		if (cust == null) {
			throw new Exception("Enter valid credentials.");
		}
		return cust;
	}

	/*
	 *This method is used to fetch customers
	 * by ID.
	 */
	@GetMapping("/getCustomerById/{cid}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("cid") int cid) {
		logger.info("Getting request from localhost to check if the customer with the given ID is present in database");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(CustomerController.class.getClassLoader().getResource("log4j.properties"));
		Customer customer = customerService.getCustomerById(cid);
		System.out.println("From Rest : " + customer);
		if (customer == null) {
			return new ResponseEntity<Customer>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}

	/*
	 *This method is used to view the list of
	 * customers.
	 */
	@GetMapping("/allCustomers")
	public ResponseEntity<List<Customer>> allCustomer() {

		logger.info("Getting request from local host to show the list of customers");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(CustomerController.class.getClassLoader().getResource("log4j.properties"));

		List<Customer> clist = customerService.getAllCustomers();
		System.out.println("From Rest allCustomers : " + clist);

		if (clist.isEmpty()) {

			return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Customer>>(clist, HttpStatus.OK);
	}

	/*
	 *This method is used to delete customers.
	 */
	@DeleteMapping("/deleteCustomer/{cid}")
	public ResponseEntity<List<Customer>> deleteCustomer(@PathVariable("cid") int customerid) {
		logger.info("Getting request from local host to delete customer from database.");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(CustomerController.class.getClassLoader().getResource("log4j.properties"));

		List<Customer> clist = customerService.deleteCustomer(customerid);
		System.out.println("From Rest update customer : " + clist);

		if (clist.isEmpty()) {

			return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Customer>>(clist, HttpStatus.OK);
	}

	/*
	 *This method is used to update customers.
	 */
	@PutMapping("/updateProfile")
	public ResponseEntity<List<Customer>> updateProfile(@RequestBody Customer customer) {
		logger.info("Getting request from local host to update customers.");
		System.out.println(logger.getName() + "  " + logger.getLevel());
		PropertyConfigurator.configure(CustomerController.class.getClassLoader().getResource("log4j.properties"));
		System.out.println("Log4j configuration is successful.");
		List<Customer> customerList = customerService.updateProfile(customer);
		System.out.println("From Rest : " + customerList);
		if (customerList.isEmpty()) {
			return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Customer>>(customerList, HttpStatus.OK);
	}

}