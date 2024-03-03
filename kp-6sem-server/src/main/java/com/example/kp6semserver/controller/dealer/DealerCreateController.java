package com.example.kp6semserver.controller.dealer;

import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/dealer/add")
public class DealerCreateController {

    @Autowired
    private DealerService dealerService;

    @PostMapping
    public ResponseEntity create(@RequestBody DealerEntity dealer){
        try {
            dealerService.create(dealer);
            return ResponseEntity.ok("Дилер добавлен");
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }


}
