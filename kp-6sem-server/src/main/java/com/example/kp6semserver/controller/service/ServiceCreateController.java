package com.example.kp6semserver.controller.service;

import com.example.kp6semserver.entity.ServiceEntity;
import com.example.kp6semserver.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/service/create")
public class ServiceCreateController {
    @Autowired
    private ServiceService serviceService;

    @PostMapping("/{userID}/{orderID}/{stationID}")
    public ResponseEntity create(@RequestBody ServiceEntity service,
                                      @PathVariable Long userID, @PathVariable Long orderID, @PathVariable Long stationID)
    {
        try {
            return ResponseEntity.ok(serviceService.create(service, userID, orderID, stationID));
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }

}
