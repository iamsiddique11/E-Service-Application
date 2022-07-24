/*
 * 
 */
package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.model.Orders;
import com.project.repository.CustomerRepository;
import com.project.repository.OrderRepository;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	OrderRepository orderRepository;

	public OrderServiceImpl() {
		super();
	}

	/*
	 *
	 */
	@Override
	public void createOrder(Orders order) {
		orderRepository.createOrder(order);
	}

	/*
	 * 
	 */
	@Override
	public List<Orders> deleteOrder(int oid) {
		return orderRepository.deleteOrder(oid);
	}

	/*
	 * 
	 */
	@Override
	public List<Orders> getAllOrders() {
		return orderRepository.getAllOrders();
	}

}
