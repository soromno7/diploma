package com.example.kp6semserver.controller.car;

import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/car/delete")
public class CarDeleteController {

    @Autowired
    private CarService carService;

    @DeleteMapping("/{id}")
    void deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
    }

}
