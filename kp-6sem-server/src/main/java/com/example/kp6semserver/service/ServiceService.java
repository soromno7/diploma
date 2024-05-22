package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.*;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceService {
    @Autowired
    private ServiceRepo serviceRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private CarRepo carRepo;
    @Autowired
    private StationRepo stationRepo;
    @Autowired
    private OrderRepo orderRepo;


    public ServiceEntity create(ServiceEntity service, Long userID, Long orderID, Long stationID) {
        UserEntity user = userRepo.findById(userID).get();
        OrderEntity order = orderRepo.findById(orderID).get();
        StationEntity station = stationRepo.findById(stationID).get();

        service.setUser(user);
        service.setOrder(order);
        service.setStation(station);

        service.setDate(service.getDate());
        service.setAddress(service.getAddress());

        return serviceRepo.save(service);
    }

    public List<ServiceEntity> getAll() { return serviceRepo.findAll();}

    public void delete(Long id) { serviceRepo.deleteById(id);}

    public ServiceEntity update (ServiceEntity service) throws ObjDoesNotExist {
        Optional<ServiceEntity> original = serviceRepo.findById(service.getId());
        original.get().setAddress(service.getAddress());
        original.get().setDate(service.getDate());
        original.get().setOrder(service.getOrder());
        original.get().setUser(service.getUser());
        original.get().setStation(service.getStation());
        return serviceRepo.save(original.get());
    }
}
