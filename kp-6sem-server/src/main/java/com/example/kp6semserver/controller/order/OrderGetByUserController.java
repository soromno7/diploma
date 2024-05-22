package com.example.kp6semserver.controller.order;

import com.example.kp6semserver.entity.OrderEntity;
import com.example.kp6semserver.model.CarModel;
import com.example.kp6semserver.model.OrderModel;
import com.example.kp6semserver.service.CarService;
import com.example.kp6semserver.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/order/get-by-user")
public class OrderGetByUserController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/{id}")
    public ArrayList<OrderEntity> getOrdersByUser (@PathVariable Long id) {
        return orderService.getOrdersByUser(id);
    }

}
