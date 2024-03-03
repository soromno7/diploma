package com.example.kp6semserver.controller.order;

import com.example.kp6semserver.model.OrderModel;
import com.example.kp6semserver.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order/get-all")
public class OrderGetAllController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public ArrayList<OrderModel> getAllOrders () {
        return orderService.getAllOrders();
    }

}