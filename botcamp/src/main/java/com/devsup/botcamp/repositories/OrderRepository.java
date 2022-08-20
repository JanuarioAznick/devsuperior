package com.devsup.botcamp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsup.botcamp.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
