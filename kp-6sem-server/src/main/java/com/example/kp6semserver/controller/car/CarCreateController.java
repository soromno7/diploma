package com.example.kp6semserver.controller.car;

import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.exception.common.ObjAlreadyExists;
import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/car/add")
public class CarCreateController {

    @Autowired
    private CarService carService;

    @PostMapping("/{dealerID}")
    public ResponseEntity create(@RequestBody CarEntity car,
                                      @PathVariable Long dealerID)
    {
        try {
            return ResponseEntity.ok(carService.create(car, dealerID));
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }


}
