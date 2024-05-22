package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.StationEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.repository.StationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StationService {
    @Autowired
    private StationRepo stationRepo;

    public StationEntity create (StationEntity station) {
        return stationRepo.save(station);
    }

    public List<StationEntity> getAll() { return stationRepo.findAll();}

//    public ArrayList<CarModel> getCarsByDealer(Long dealerID) {
//        String dealerName = dealerRepo.findById(dealerID).get().getName();
//
//        ArrayList<CarModel> resArr = new ArrayList<CarModel>();
//        ArrayList<CarModel> allCars = CarModel.toModel(stationRepo.findAll());
//
//        for(CarModel model : allCars) {
//            if(model.getDealer_name().equals(dealerName)) resArr.add(model);
//        }
//        return resArr;
//    }

    public void delete(Long id) { stationRepo.deleteById(id);}

    public StationEntity update (StationEntity station) throws ObjDoesNotExist {
        Optional<StationEntity> original = stationRepo.findById(station.getId());
        original.get().setBuilding(station.getBuilding());
        original.get().setCity(station.getCity());
        original.get().setStreet(station.getStreet());
        return stationRepo.save(original.get());
    }
}
