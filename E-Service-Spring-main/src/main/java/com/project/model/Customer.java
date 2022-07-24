/*
 * 
 */
package com.project.model;

import javax.persistence.*;

@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	@Column
	private String name;
	@Column
	private String phone;
	@Column
	private String address;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String confirmpassword;
	@Column
	private String gender;

	public Customer() {
		super();
	}

	public Customer(int cid, String name, String phone, String address, String email, String password,
			String confirmpassword, String gender) {
		super();
		this.cid = cid;
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.email = email;
		this.password = password;
		this.confirmpassword = confirmpassword;
		this.gender = gender;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	@Override
	public String toString() {
		return "Customer [cid=" + cid + ", name=" + name + ", phone=" + phone + ", address=" + address + ", email="
				+ email + ", password=" + password + ", confirmpassword=" + confirmpassword + ", gender=" + gender
				+ "]";
	}
}