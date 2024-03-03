package com.example.kp6semserver.controller.user;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjAlreadyExists;
import com.example.kp6semserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/registration")
public class RegistrationController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity registration(@RequestBody UserEntity user){
        try {
            return ResponseEntity.ok(userService.registration(user));
        } catch(ObjAlreadyExists e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }

}
