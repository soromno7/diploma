package com.example.kp6semserver.controller.record;

import com.example.kp6semserver.service.DealerService;
import com.example.kp6semserver.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/record/delete")
public class RecordDeleteController {

    @Autowired
    private RecordService recordService;

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        recordService.delete(id);
    }

}
