package com.example.kp6semserver.controller.station;

import com.example.kp6semserver.entity.StationEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/station/update")
public class StationUpdateController {

    @Autowired
    private StationService stationService;

    @PatchMapping ("/{id}")
    StationEntity update(@RequestBody StationEntity station) throws ObjDoesNotExist {
        return stationService.update(station);
    }

}
