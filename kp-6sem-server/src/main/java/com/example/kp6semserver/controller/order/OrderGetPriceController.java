package com.example.kp6semserver.controller.order;

import com.example.kp6semserver.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order/get-price")
public class OrderGetPriceController {
    @Autowired
    private OrderService orderService;

//    @PostMapping
//    public ResponseEntity<Double> getPrice (@RequestBody PriceEntity data) {
//        return ResponseEntity.ok(orderService.calculatePrice(data.getTariff(), data.getPromocode(), data.getDays()));
//    }

}