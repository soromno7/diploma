package com.example.kp6semserver.controller.rental;

import com.example.kp6semserver.model.RentalModel;
import com.example.kp6semserver.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/rental/get-all")
public class RentalGetAllController {

    @Autowired
    private RentalService rentalService;

    @GetMapping
    public ArrayList<RentalModel> getAllRentals () {return rentalService.getAllRentals();}

}
