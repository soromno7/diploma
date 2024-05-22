package com.example.kp6semserver.controller.record;

import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.entity.RecordEntity;
import com.example.kp6semserver.service.DealerService;
import com.example.kp6semserver.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/record/get-all")
public class RecordGetAllController {

    @Autowired
    private RecordService recordService;

    @GetMapping
    public List<RecordEntity> getAllRecords () {
        return recordService.getAll();
    }

}
