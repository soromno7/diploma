package com.example.kp6semserver.controller.bank_card;

import com.example.kp6semserver.service.BankCardService;
import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/card/delete")
public class BankCardDeleteController {

    @Autowired
    private BankCardService carService;

    @DeleteMapping("/{id}")
    void deleteCar(@PathVariable Long id) {
        carService.delete(id);
    }

}
