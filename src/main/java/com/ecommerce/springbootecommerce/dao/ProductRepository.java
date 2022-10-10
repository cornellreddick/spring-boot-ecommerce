package com.ecommerce.springbootecommerce.dao;

import com.ecommerce.springbootecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

//Entity Type is Product and Primary Key is Long
public interface ProductRepository extends JpaRepository<Product, Long> {



}
