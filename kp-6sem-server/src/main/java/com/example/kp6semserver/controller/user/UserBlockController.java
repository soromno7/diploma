package com.example.kp6semserver.controller.user;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/user/block")
public class UserBlockController {

    @Autowired
    private UserService userService;

    @PostMapping("/{id}")
    void blockUser(@PathVariable Long id) throws ObjDoesNotExist {
        userService.blockUser(id);
    }

}
