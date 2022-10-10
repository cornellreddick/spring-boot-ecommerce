package com.ecommerce.springbootecommerce.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
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

    // Add JPA mapping between the fields and columns
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategory category;

    @Column(name = "sku")
    private String sku;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private  String description;

    @Column(name = "unit_price")
    private BigDecimal unitPrice;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "active")
    private boolean active;

    @Column(name = "units_in_stock")
    private int unitsInStock;

    @Column(name = "date_created")
    // Hibernate will automatically manage the timestamps in the background.
    @CreationTimestamp
    private Date dateCreated;

    @Column(name = "last_updated")
    // Hibernate will automatically manage the timestamps in the background.
    @UpdateTimestamp
    private Date lastUpdated;




}
