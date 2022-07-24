/*
 * 
 */
package com.project.service;

import java.util.List;

import com.project.model.Customer;

public interface CustomerService {
	public void createCustomer(Customer customer);

	public List<Customer> deleteCustomer(int cno);

	public List<Customer> getAllCustomers();

	public List<Customer> updateProfile(Customer customer);

	public Customer getCustomerById(int cid);

	public Customer getCustomerByEmail(String email, String password);

}