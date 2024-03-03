package com.example.kp6semserver.controller.order;

import com.example.kp6semserver.entity.OrderEntity;
import com.example.kp6semserver.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/order/create")
public class OrderCreateController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/{userID}/{dealerID}/{carID}")
    public ResponseEntity createOrder(@RequestBody OrderEntity order,
                                      @PathVariable Long userID, @PathVariable Long dealerID, @PathVariable Long carID)
    {
        try {
          return ResponseEntity.ok(orderService.create(order, userID, dealerID, carID));
        } catch(Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка: " + e.getMessage());
        }
    }

}
