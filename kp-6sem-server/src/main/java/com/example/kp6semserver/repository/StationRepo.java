package com.example.kp6semserver.repository;

import com.example.kp6semserver.entity.StationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StationRepo extends JpaRepository<StationEntity, Long> {
}
