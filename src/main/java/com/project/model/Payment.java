/*
 * 
 */
package com.project.model;

import javax.persistence.*;

@Entity
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int paymentId;
	@Column
	private long cardNumber;
	@Column
	private int year;
	@Column
	private int cvv;
	@Column
	private String month;

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(int paymentId, long cardNumber, int year, int cvv, String month) {
		super();
		this.paymentId = paymentId;
		this.cardNumber = cardNumber;
		this.year = year;
		this.cvv = cvv;
		this.month = month;
	}

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public long getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", cardNumber=" + cardNumber + ", year=" + year + ", cvv=" + cvv
				+ ", month=" + month + "]";
	}

}
