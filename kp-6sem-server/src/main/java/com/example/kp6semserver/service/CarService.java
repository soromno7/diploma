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
        return carRepo.save(car);
    }

    public ArrayList<CarModel> getAllCars() { return CarModel.toModel(carRepo.findAll());}

    public ArrayList<CarModel> getCarsByDealer(Long dealerID) {
        String dealerName = dealerRepo.findById(dealerID).get().getName();

        ArrayList<CarModel> resArr = new ArrayList<CarModel>();
        ArrayList<CarModel> allCars = CarModel.toModel(carRepo.findAll());

        for(CarModel model : allCars) {
            if(model.getDealer().equals(dealerName)) resArr.add(model);
        }
        return resArr;
    }

//    public Double[] getLocation (Long id) {
//        Optional<CarEntity> optionalCar = carRepo.findById(id);
//        CarEntity car = optionalCar.get();
//        return car.getLocation();
//    }

    public void deleteCar(Long id) { carRepo.deleteById(id);}

//    public CarEntity update (CarEntity car) throws ObjDoesNotExist {
//        return carRepo.findById(car.getId())
//                .map(newCar -> {
//                    newCar.setBrand(car.getBrand());
//                    newCar.setEngineCapacity(car.getEngineCapacity());
//                    newCar.setIsMaintained(car.getIsMaintained());
//                    newCar.setName(car.getName());
//                    newCar.setPlateNumber(car.getPlateNumber());
//                    newCar.setSeatsQuantity(car.getSeatsQuantity());
//                    newCar.setStereo(car.getStereo());
//                    newCar.setTariff(car.getTariff());
//                    newCar.setYear(car.getYear());
//                    newCar.setLocation(car.getLocation());
//                    return carRepo.save(car);
//                }).orElseThrow(() -> new ObjDoesNotExist("Такого автомобиля в системе не существует"));
//    }
}
