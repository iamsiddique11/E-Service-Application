/*
 * 
 */
package com.project.service;

import java.util.List;

import com.project.model.Orders;

public interface OrderService {

	public List<Orders> deleteOrder(int oid);

	public List<Orders> getAllOrders();

	void createOrder(Orders order);
}
