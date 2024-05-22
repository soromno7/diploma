package com.example.kp6semserver.controller.station;

import com.example.kp6semserver.entity.StationEntity;
import com.example.kp6semserver.model.CarModel;
import com.example.kp6semserver.service.CarService;
import com.example.kp6semserver.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/station/get-all")
public class StationGetAllController {

    @Autowired
    private StationService stationService;

    @GetMapping
    public List<StationEntity> getAllCars () {
        return stationService.getAll();
    }

}
