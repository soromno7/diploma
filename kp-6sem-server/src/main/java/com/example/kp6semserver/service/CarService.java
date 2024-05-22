package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.entity.DealerEntity;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.model.CarModel;
import com.example.kp6semserver.repository.CarRepo;
import com.example.kp6semserver.repository.DealerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepo carRepo;

    @Autowired
    private DealerRepo dealerRepo;

    public CarEntity create (CarEntity car, Long dealerID) {
        DealerEntity dealer = dealerRepo.findById(dealerID).get();

        car.setDealer(dealer);
        car.setIsAvailable("Да");
        return carRepo.save(car);
    }

    public ArrayList<CarModel> getAllCars() { return CarModel.toModel(carRepo.findAll());}

    public ArrayList<CarModel> getCarsByDealer(Long dealerID) {
        String dealerName = dealerRepo.findById(dealerID).get().getName();

        ArrayList<CarModel> resArr = new ArrayList<CarModel>();
        ArrayList<CarModel> allCars = CarModel.toModel(carRepo.findAll());

        for(CarModel model : allCars) {
            if(model.getDealer_name().equals(dealerName)) resArr.add(model);
        }
        return resArr;
    }

    public void deleteCar(Long id) { carRepo.deleteById(id);}

    public CarEntity update (CarEntity car) throws ObjDoesNotExist {
        Optional<CarEntity> original = carRepo.findById(car.getId());
        original.get().setEngineCapacity(car.getEngineCapacity());
        original.get().setName(car.getName());
        original.get().setPlateNumber(car.getPlateNumber());
        original.get().setTariff(car.getTariff());
        original.get().setYear(car.getYear());
        original.get().setFuel(car.getFuel());
        original.get().setGearbox(car.getGearbox());
        return carRepo.save(original.get());
    }
}
