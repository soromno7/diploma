package com.example.kp6semserver.controller.order;

import com.example.kp6semserver.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order/get-promocode")
public class OrderGetPromocodeController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public String getPromocode () {return orderService.createPromocode();}

}