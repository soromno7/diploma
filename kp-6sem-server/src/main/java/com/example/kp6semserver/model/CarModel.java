package com.example.kp6semserver.model;

import com.example.kp6semserver.entity.CarEntity;

import java.util.ArrayList;
import java.util.List;

public class CarModel {

    private Long id;
    private String name;
    private String year;
    private String engineCapacity;
    private String plateNumber;
    private String fuel;
    private String gearbox;
    private String tariff;
    private String dealer;
    private String isAvailable;


    public static CarModel toModelOne(CarEntity entity) {
        CarModel model = new CarModel();
        model.setId(entity.getId());
        model.setName(entity.getName());
        model.setYear(entity.getYear());
        model.setEngineCapacity(entity.getEngineCapacity());
        model.setPlateNumber(entity.getPlateNumber());
        model.setTariff(entity.getTariff());
        model.setDealer(entity.getDealer().getName());
        model.setFuel(entity.getFuel());
        model.setGearbox(entity.getGearbox());
        model.setIsAvailable(entity.getIsAvailable());

        return model;
    }

    public static ArrayList<CarModel> toModel(List<CarEntity> list) {
        ArrayList<CarModel> resList = new ArrayList<CarModel>();

        for(CarEntity entity : list) {
            resList.add(toModelOne(entity));
        }

        return resList;
    }

    public CarModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getEngineCapacity() {
        return engineCapacity;
    }

    public void setEngineCapacity(String engineCapacity) {
        this.engineCapacity = engineCapacity;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public String getTariff() {
        return tariff;
    }

    public void setTariff(String tariff) {
        this.tariff = tariff;
    }

    public String getDealer() {
        return dealer;
    }

    public void setDealer(String dealer) {
        this.dealer = dealer;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getGearbox() {
        return gearbox;
    }

    public void setGearbox(String gearbox) {
        this.gearbox = gearbox;
    }

    public String getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(String isAvailable) {
        this.isAvailable = isAvailable;
    }
}
