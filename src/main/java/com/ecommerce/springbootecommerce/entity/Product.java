package com.ecommerce.springbootecommerce.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="product")
//Lombok:
// This will automatically generate the getter/setter methods for me behind the scents.
// It reduces boilerplace code.
// You will not see getter/setter method in the code.
@Data
public class Product {

    private Long id;

    private String sku;

    private String name;

    private  String description;

    private BigDecimal unitPrice;

    private String imageUrl;

    private boolean active;

    private int unitsInStock;

    private Date dateCreated;

    private Date lastUpdated;




}
