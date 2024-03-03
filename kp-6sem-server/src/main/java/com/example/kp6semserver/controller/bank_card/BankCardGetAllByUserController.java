package com.example.kp6semserver.controller.bank_card;

import com.example.kp6semserver.entity.BankCardEntity;
import com.example.kp6semserver.model.CarModel;
import com.example.kp6semserver.service.BankCardService;
import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/card/get-by-user")
public class BankCardGetAllByUserController {

    @Autowired
    private BankCardService cardService;

    @GetMapping("/{id}")
    public List<BankCardEntity> getAll (@PathVariable Long id) {
        return cardService.getAllByUser(id);
    }

}
