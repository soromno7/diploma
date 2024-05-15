package com.example.kp6semserver.model;

import com.example.kp6semserver.entity.OrderEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class OrderModel {
    private Long id;
    private Long userID;
    private Long carID;
    private String start;
    private String end;
    private String price;

    public static OrderModel toModelOne(OrderEntity entity) {
        OrderModel model = new OrderModel();
        model.setId(entity.getId());
        model.setCarID(entity.getCar().getId());
        model.setUserID(entity.getUser().getId());
        model.setPrice(entity.getPrice());
        model.setEnd(entity.getEnd_date());
        model.setStart(entity.getOrderDate());

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

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getCarID() {
        return carID;
    }

    public void setCarID(Long carID) {
        this.carID = carID;
    }

}
