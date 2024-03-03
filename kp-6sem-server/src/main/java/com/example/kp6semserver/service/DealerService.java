package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.repository.DealerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DealerService {
    @Autowired
    private DealerRepo dealerRepo;

    public DealerEntity create (DealerEntity dealer) { return dealerRepo.save(dealer);}

    public List<DealerEntity> getAll() { return dealerRepo.findAll();}

    public void delete(Long id) { dealerRepo.deleteById(id);}

    public DealerEntity update (DealerEntity dealer) throws ObjDoesNotExist {
        return dealerRepo.findById(dealer.getId())
                .map(newDealer -> {
                    newDealer.setName(dealer.getName());
                    return dealerRepo.save(dealer);
                }).orElseThrow(() -> new ObjDoesNotExist("Такого дилера в системе не существует"));
    }
}
