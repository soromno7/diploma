package com.example.kp6semserver.controller.dealer;

import com.example.kp6semserver.service.DealerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/dealer/delete")
public class DealerDeleteController {

    @Autowired
    private DealerService dealerService;

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id) {
        dealerService.delete(id);
    }

}
