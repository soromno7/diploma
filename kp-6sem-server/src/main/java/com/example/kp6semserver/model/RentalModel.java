package com.example.kp6semserver.model;

import com.example.kp6semserver.entity.RecordEntity;

import java.util.ArrayList;
import java.util.List;

public class RentalModel {
    private Long id;
    private String orderQuantity;
    private String orderSum;
    private String rentalDate;
    private String rentalTime;
    private String lastOrderTime;

    public static ArrayList<RentalModel> toModel(List<RecordEntity> list) {
        ArrayList<RentalModel> resList = new ArrayList<RentalModel>();

        for(RecordEntity entity : list) {
            RentalModel model = new RentalModel();

            model.setId(entity.getId());
//            model.setRentalDate(entity.getRentalDate());
//            model.setRentalTime(entity.getRentalTime());
            model.setOrderQuantity(entity.getOrderQuantity());
            model.setOrderSum(entity.getOrderSum());
            model.setLastOrderTime(entity.getLastOrderTime());

            resList.add(model);
        }

        return resList;
    }

    public RentalModel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(String orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public String getOrderSum() {
        return orderSum;
    }

    public void setOrderSum(String orderSum) {
        this.orderSum = orderSum;
    }

    public String getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(String rentalDate) {
        this.rentalDate = rentalDate;
    }

    public String getRentalTime() {
        return rentalTime;
    }

    public void setRentalTime(String rentalTime) {
        this.rentalTime = rentalTime;
    }

    public String getLastOrderTime() {
        return lastOrderTime;
    }

    public void setLastOrderTime(String lastOrderTime) {
        this.lastOrderTime = lastOrderTime;
    }
}
