/*
 *
 */
package com.project.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
	private int quantity;
	private int price;
	private int total;

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Orders(int orderId, int quantity, int price, int total) {
		super();
		this.orderId = orderId;
		this.quantity = quantity;
		this.price = price;
		this.total = total;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", quantity=" + quantity + ", price=" + price + ", total=" + total + "]";
	}

}
