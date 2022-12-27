package com.ecommerce.springbootecommerce.dao;

import com.ecommerce.springbootecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

//Entity Type is Product and Primary Key is Long
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

}
