package com.example.kp6semserver.controller.service;

import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.entity.ServiceEntity;
import com.example.kp6semserver.service.DealerService;
import com.example.kp6semserver.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/service/get-all")
public class ServiceGetAllController {

    @Autowired
    private ServiceService serviceService;

    @GetMapping
    public List<ServiceEntity> getAll () {
        return serviceService.getAll();
    }

}
