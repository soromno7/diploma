package com.example.kp6semserver.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Record")
public class RecordEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String date;
    private String orders_quantity;
    private String orders_revenue;
    private String users_quantity;
    private String cars_quantity;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    public RecordEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getOrders_quantity() {
        return orders_quantity;
    }

    public void setOrders_quantity(String orders_quantity) {
        this.orders_quantity = orders_quantity;
    }

    public String getOrders_revenue() {
        return orders_revenue;
    }

    public void setOrders_revenue(String orders_revenue) {
        this.orders_revenue = orders_revenue;
    }

    public String getUsers_quantity() {
        return users_quantity;
    }

    public void setUsers_quantity(String users_quantity) {
        this.users_quantity = users_quantity;
    }

    public String getCars_quantity() {
        return cars_quantity;
    }

    public void setCars_quantity(String cars_quantity) {
        this.cars_quantity = cars_quantity;
    }
}
