package com.example.kp6semserver.model;

import com.example.kp6semserver.entity.OrderEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class OrderModel {
    private Long id;
    private String FirstName;
    private String LastName;
    private String orderDate;
    private String endDate;
    private String price;
    private String promocode;
    private String dealer;
    private String carName;
    private String year;
    private String engineCapacity;
    private String plateNumber;
    private String gearbox;
    private String fuel;
    private String duration;
    private Long userID;
    private Long dealerID;
    private Long carID;

    public static OrderModel toModelOne(OrderEntity entity) {
        OrderModel model = new OrderModel();
        model.setId(entity.getId());
        model.setFirstName(entity.getUser().getFirst_name());
        model.setLastName(entity.getUser().getLast_name());
        model.setOrderDate(entity.getOrderDate());
        model.setEndDate(entity.getEnd_date());
        model.setPrice(entity.getPrice());
        model.setPromocode(entity.getPromocode());
        model.setDealer(entity.getDealer().getName());
        model.setCarName(entity.getCar().getName());
        model.setYear(entity.getCar().getYear());
        model.setEngineCapacity(entity.getCar().getEngineCapacity());
        model.setPlateNumber(entity.getCar().getPlateNumber());
        model.setUserID(entity.getUser().getId());
        model.setDealerID(entity.getDealer().getId());
        model.setCarID(entity.getCar().getId());
        model.setFuel(entity.getCar().getFuel());
        model.setGearbox(entity.getCar().getGearbox());
        model.setDuration(entity.getDuration());

        return model;
    }
    public static ArrayList<OrderModel> toModel(List<OrderEntity> list) {
        ArrayList<OrderModel> resList = new ArrayList<OrderModel>();

        for(OrderEntity entity : list) {
            resList.add(toModelOne(entity));
        }

        return resList;
    }

    public OrderModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPromocode() {
        return promocode;
    }

    public void setPromocode(String promocode) {
        this.promocode = promocode;
    }

    public String getDealer() {
        return dealer;
    }

    public void setDealer(String dealer) {
        this.dealer = dealer;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
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

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getDealerID() {
        return dealerID;
    }

    public void setDealerID(Long dealerID) {
        this.dealerID = dealerID;
    }

    public Long getCarID() {
        return carID;
    }

    public void setCarID(Long carID) {
        this.carID = carID;
    }

    public String getGearbox() {
        return gearbox;
    }

    public void setGearbox(String gearbox) {
        this.gearbox = gearbox;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }
}
