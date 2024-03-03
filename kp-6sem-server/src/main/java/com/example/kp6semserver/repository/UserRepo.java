package com.example.kp6semserver.repository;

import com.example.kp6semserver.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity, Long> {
    UserEntity findByEmail (String email);
}
