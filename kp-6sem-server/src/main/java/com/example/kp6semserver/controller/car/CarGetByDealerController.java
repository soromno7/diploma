package com.example.kp6semserver.controller.car;

import com.example.kp6semserver.model.CarModel;
import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/car/get-by-dealer")
public class CarGetByDealerController {

    @Autowired
    private CarService carService;

    @GetMapping("/{id}")
    public ArrayList<CarModel> getAllCars (@PathVariable Long id) {
        return carService.getCarsByDealer(id);
    }

}
