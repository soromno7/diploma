package com.example.kp6semserver.controller.station;

import com.example.kp6semserver.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/station/delete")
public class StationDeleteController {

    @Autowired
    private StationService stationService;

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        stationService.delete(id);
    }

}
