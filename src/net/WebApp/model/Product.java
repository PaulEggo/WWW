package net.WebApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	@Id
	@Column(name = "barcode")
	private int barcode;
	@Column(name = "name")
	private String name;
	@Column(name = "color")
	private String color;
	@Column(name = "description")
	private String description;
	
	public int getBarcode() {
		return barcode;
	}
	public void setBarcode(int barcode) {
		this.barcode = barcode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}	
	
	@Override
	public String toString() {
		return "Product [barcode=" + barcode + ", name=" + name + ", color=" + color + ", description=" + description
				+ "]";
	}
}
