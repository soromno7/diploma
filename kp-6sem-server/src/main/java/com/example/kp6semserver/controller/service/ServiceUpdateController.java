package com.example.kp6semserver.controller.service;

import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.entity.ServiceEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/service/update")
public class ServiceUpdateController {

    @Autowired
    private ServiceService serviceService;

    @PatchMapping ("/{id}")
    ServiceEntity update(@RequestBody ServiceEntity service) throws ObjDoesNotExist {
        return serviceService.update(service);
    }


}
