package com.example.kp6semserver.controller.dealer;

import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/dealer/get-all")
public class DealerGetAllController {

    @Autowired
    private DealerService dealerService;

    @GetMapping
    public List<DealerEntity> getAllUsers () {
        return dealerService.getAll();
    }

}
