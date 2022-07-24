/*
 *
 */
package com.project.restcontroller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.Orders;
import com.project.service.OrderService;

@RestController
@RequestMapping(value = "/order")
@CrossOrigin(origins = "*", allowedHeaders="*",allowCredentials="true", methods = { RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST,
		RequestMethod.DELETE })
public class OrderController {
	private static final Logger logger = Logger.getLogger(CustomerController.class);

	@Autowired
	OrderService orderService;

	/*
	 *This method is used to add orders to the
	 * database.
	 */
	@PostMapping("/createOrder")
	public Orders createOrder(@RequestBody Orders order) {
		logger.info("Getting request from localhost to add order to the database");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(OrderController.class.getClassLoader().getResource("log4j.properties"));

		orderService.createOrder(order);
		return order;
	}

	/*
	 *This method is used to delete orders
	 * from the database.
	 */
	@DeleteMapping("/deleteOrder/{oid}")
	public ResponseEntity<List<Orders>> deleteOrder(@PathVariable("oid") int orderid) {
		logger.info("Getting request from local host to delete order from database.");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(OrderController.class.getClassLoader().getResource("log4j.properties"));

		List<Orders> olist = orderService.deleteOrder(orderid);
		System.out.println("From Rest delete order : " + olist);

		if (olist.isEmpty()) {

			return new ResponseEntity<List<Orders>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Orders>>(olist, HttpStatus.OK);
	}

	/*
	 * This method is used to view the list of
	 * orders.
	 */
	@GetMapping("/allOrders")
	public ResponseEntity<List<Orders>> allOrders() {

		logger.info("Getting request from local host to show the list of orders");
		System.out.println(logger.getName() + "  " + logger.getLevel());

		PropertyConfigurator.configure(OrderController.class.getClassLoader().getResource("log4j.properties"));

		List<Orders> olist = orderService.getAllOrders();
		System.out.println("From Rest allOrders : " + olist);

		if (olist.isEmpty()) {

			return new ResponseEntity<List<Orders>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Orders>>(olist, HttpStatus.OK);
	}
}
