package com.example.kp6semserver.controller.user;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/user/unblock")
public class UserUnblockController {

    @Autowired
    private UserService userService;

    @PostMapping("/{id}")
    void unblockUser(@PathVariable Long id) throws ObjDoesNotExist {
        userService.unblockUser(id);
    }

}
