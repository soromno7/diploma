package com.example.kp6semserver.controller.user;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/user/get-all")
public class UserGetAllController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserEntity> getAllUsers () {
        return userService.getAllUsers();
    }

}
