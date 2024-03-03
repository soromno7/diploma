package com.example.kp6semserver.controller.user;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/user/get")
public class UserGetOneController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    Optional<UserEntity> getUser(@PathVariable Long id) throws ObjDoesNotExist {
        return userService.getOneUser(id);
    }

}
