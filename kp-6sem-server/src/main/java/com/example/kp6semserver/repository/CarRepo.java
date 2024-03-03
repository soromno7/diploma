package com.example.kp6semserver.repository;

import com.example.kp6semserver.entity.CarEntity;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CarRepo extends JpaRepository<CarEntity, Long> {
}
