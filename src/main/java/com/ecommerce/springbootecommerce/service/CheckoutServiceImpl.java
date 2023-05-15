package com.ecommerce.springbootecommerce.service;

import com.ecommerce.springbootecommerce.dao.CustomerRepository;
import com.ecommerce.springbootecommerce.dto.Purchase;
import com.ecommerce.springbootecommerce.dto.PurchaseResponse;
import org.springframework.stereotype.Service;

@Service
public class CheckoutServiceImpl implements CheckoutService{

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    @Override
    public PurchaseResponse placeOrder(Purchase purchase) {
        return null;
    }
}
