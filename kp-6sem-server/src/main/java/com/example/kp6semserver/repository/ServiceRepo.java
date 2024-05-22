package com.example.kp6semserver.repository;

import com.example.kp6semserver.entity.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepo extends JpaRepository<ServiceEntity, Long> {
}
