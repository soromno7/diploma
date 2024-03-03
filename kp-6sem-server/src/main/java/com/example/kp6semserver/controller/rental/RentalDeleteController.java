package com.example.kp6semserver.controller.rental;

import com.example.kp6semserver.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/rental/delete")
public class RentalDeleteController {

    @Autowired
    private RentalService rentalService;

    @DeleteMapping("/{id}")
    void deleteCar(@PathVariable Long id) {
        rentalService.delete(id);
    }

}
