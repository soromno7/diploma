package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.BankCardEntity;
import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.model.CarModel;
import com.example.kp6semserver.repository.BankCardRepo;
import com.example.kp6semserver.repository.CarRepo;
import com.example.kp6semserver.repository.DealerRepo;
import com.example.kp6semserver.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BankCardService {
    @Autowired
    private BankCardRepo cardRepo;
    @Autowired
    private UserRepo userRepo;

    public BankCardEntity create (BankCardEntity card, Long userID) {
        UserEntity user = userRepo.findById(userID).get();
        card.setUser(user);

        return cardRepo.save(card);
    }

    public List<BankCardEntity> getAllByUser (Long userID) {
        List<BankCardEntity> resArr = new ArrayList<BankCardEntity>();
        List<BankCardEntity> allCards = cardRepo.findAll();

        for(BankCardEntity entity : allCards) {
            if(entity.getUser().getId().equals(userID)) resArr.add(entity);
        }
        return resArr;
    }

    public void delete(Long id) { cardRepo.deleteById(id);}

}
