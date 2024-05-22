package com.example.kp6semserver.controller.service;

import com.example.kp6semserver.service.DealerService;
import com.example.kp6semserver.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/service/delete")
public class ServiceDeleteController {

    @Autowired
    private ServiceService serviceService;

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        serviceService.delete(id);
    }

}
