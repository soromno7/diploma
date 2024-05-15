package com.example.kp6semserver.controller.car;

import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/car/update")
public class CarUpdateController {

    @Autowired
    private CarService carService;

    @PatchMapping ("/{id}")
    CarEntity updateCar(@RequestBody CarEntity car) throws ObjDoesNotExist {
        return null;
//        return carService.update(car);
    }

}
