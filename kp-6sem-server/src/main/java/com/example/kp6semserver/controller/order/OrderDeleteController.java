package com.example.kp6semserver.controller.order;

import com.example.kp6semserver.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/order/delete")
public class OrderDeleteController {
    @Autowired
    private OrderService orderService;

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

}
