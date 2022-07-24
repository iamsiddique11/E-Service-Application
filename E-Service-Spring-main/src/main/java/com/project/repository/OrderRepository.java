package com.project.repository;

import java.util.List;

import com.project.model.Orders;

public interface OrderRepository {

	public List<Orders> deleteOrder(int oid);

	public List<Orders> getAllOrders();

	public void createOrder(Orders order);

}
