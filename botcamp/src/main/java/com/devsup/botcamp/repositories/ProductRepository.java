package com.devsup.botcamp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsup.botcamp.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	List<Product> findAllByOrderByNameAsc();

}
