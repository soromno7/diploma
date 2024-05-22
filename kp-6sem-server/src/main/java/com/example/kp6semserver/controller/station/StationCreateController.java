package com.example.kp6semserver.controller.station;

import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.entity.OrderEntity;
import com.example.kp6semserver.entity.StationEntity;
import com.example.kp6semserver.service.OrderService;
import com.example.kp6semserver.service.RecordService;
import com.example.kp6semserver.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/station/create")
public class StationCreateController {
    @Autowired
    private StationService stationService;

    @PostMapping
    public ResponseEntity create(@RequestBody StationEntity station)
    {
        try {
            return ResponseEntity.ok(stationService.create(station));
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }

}
