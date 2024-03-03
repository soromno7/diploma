package com.example.kp6semserver.controller.user;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/user/update")
public class UserUpdateController {

    @Autowired
    private UserService userService;

    @PatchMapping("/{id}")
    UserEntity updateUser(@RequestBody UserEntity user, @PathVariable Long id) throws ObjDoesNotExist {
        return userService.update(user);
    }

}
