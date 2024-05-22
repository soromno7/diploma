package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.CarEntity;
import com.example.kp6semserver.entity.OrderEntity;
import com.example.kp6semserver.entity.RecordEntity;
import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.repository.CarRepo;
import com.example.kp6semserver.repository.OrderRepo;
import com.example.kp6semserver.repository.RecordRepo;
import com.example.kp6semserver.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class RecordService {

    @Autowired
    private RecordRepo recordRepo;

    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private CarRepo carRepo;

    public RecordEntity create() {
        RecordEntity record = new RecordEntity();
        List<OrderEntity> orders = orderRepo.findAll();
        List<UserEntity> users = userRepo.findAll();
        List<CarEntity> cars = carRepo.findAll();

        String ordersQuantity = String.valueOf(orders.size());
        String usersQuantity = String.valueOf(users.size());
        String carsQuantity = String.valueOf(cars.size());

        String orderSum = orderSum(orders);

        Date date = new Date();
        SimpleDateFormat formatDate = new SimpleDateFormat("dd.MM.yyyy");
        String strDate = formatDate.format(date);

        record.setDate(strDate);
        record.setOrders_quantity(ordersQuantity);
        record.setOrders_revenue(orderSum);
        record.setCars_quantity(carsQuantity);
        record.setUsers_quantity(usersQuantity);

        return recordRepo.save(record);
    }

    public String orderSum(List<OrderEntity> orders){
        double sum = 0;

        for(OrderEntity entity : orders) {
            sum += Double.parseDouble(entity.getPrice());
        }

        return String.valueOf(sum);
    }

    public List<RecordEntity> getAll() { return recordRepo.findAll();}

    public void delete(Long id) { recordRepo.deleteById(id);}


}
