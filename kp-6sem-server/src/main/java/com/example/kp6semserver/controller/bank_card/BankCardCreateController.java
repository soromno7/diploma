package com.example.kp6semserver.controller.bank_card;

import com.example.kp6semserver.entity.BankCardEntity;
import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.exception.common.ObjAlreadyExists;
import com.example.kp6semserver.service.BankCardService;
import com.example.kp6semserver.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/card/create")
public class BankCardCreateController {

    @Autowired
    private BankCardService cardService;

    @PostMapping("/{userID}")
    public ResponseEntity create(@RequestBody BankCardEntity card,
                                 @PathVariable Long userID)
    {
        try {
            return ResponseEntity.ok(cardService.create(card, userID));
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }


}
