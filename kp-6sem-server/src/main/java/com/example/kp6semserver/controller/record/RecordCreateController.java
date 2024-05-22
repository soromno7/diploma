package com.example.kp6semserver.controller.record;

import com.example.kp6semserver.entity.OrderEntity;
import com.example.kp6semserver.service.OrderService;
import com.example.kp6semserver.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/record/create")
public class RecordCreateController {
    @Autowired
    private RecordService recordService;

    @PostMapping
    public ResponseEntity createRecord()
    {
        try {
            return ResponseEntity.ok(recordService.create());
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }

}
