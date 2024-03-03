package com.example.kp6semserver.controller.rental;

import com.example.kp6semserver.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/rental/create")

public class RentalCreateController {
    @Autowired
    private RentalService rentalService;

    @PostMapping
    public void createRental() { rentalService.create();}

}
