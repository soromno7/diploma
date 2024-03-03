package com.example.kp6semserver.controller.dealer;

import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/dealer/update")
public class DealerUpdateController {

    @Autowired
    private DealerService dealerService;

    @PutMapping("/{id}")
    DealerEntity update(@RequestBody DealerEntity dealer, @PathVariable Long id) throws ObjDoesNotExist {
        return dealerService.update(dealer);
    }

}
