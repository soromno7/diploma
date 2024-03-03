package com.example.kp6semserver.service;

import com.example.kp6semserver.entity.UserEntity;
import com.example.kp6semserver.exception.common.ObjAlreadyExists;
import com.example.kp6semserver.exception.common.ObjDoesNotExist;
import com.example.kp6semserver.exception.user.UserPasswordInvalid;
import com.example.kp6semserver.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserEntity registration (UserEntity user) throws ObjAlreadyExists {
        if(userRepo.findByEmail(user.getEmail()) != null){
            throw new ObjAlreadyExists("Пользователь с такой почтой уже существует");
        }
        userRepo.save(user);
        UserEntity dbUser = userRepo.findByEmail(user.getEmail());
        return dbUser;
    }

    public UserEntity login (UserEntity user) throws UserPasswordInvalid, ObjDoesNotExist {
        UserEntity dbUser = userRepo.findByEmail(user.getEmail());

        if(dbUser == null) {
            throw new ObjDoesNotExist("Данная почта не зарегистрирована");
        }
        if(!user.getPassword().equals(dbUser.getPassword())){
            throw new UserPasswordInvalid("Неверно введенный пароль");
        }
        return dbUser;
    }

    public List<UserEntity> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<UserEntity> getOneUser(Long id) { return userRepo.findById(id);};

    public void deleteUser(Long id) { userRepo.deleteById(id);}

    public UserEntity update (UserEntity user) throws ObjDoesNotExist {
        return userRepo.findById(user.getId())
                .map(newUser -> {
                    newUser.setEmail(user.getEmail());
                    newUser.setPassword(user.getPassword());
                    newUser.setLast_name(user.getLast_name());
                    newUser.setFirst_name(user.getFirst_name());
                    newUser.setDate_of_birth(user.getDate_of_birth());
                    newUser.setPhone(user.getPhone());
                    newUser.setRole(user.getRole());
                    newUser.setStatus(user.getStatus());
                    return userRepo.save(user);
                }).orElseThrow(() -> new ObjDoesNotExist("Пользователь не существует"));
    }

    public static String fence_encode(String plainText, int depth) {
        int railLen = depth;
        int txtLen = plainText.length();
        int colLen = txtLen / railLen;
        char[][] fence = new char[railLen][colLen];
        for (int rail = 0; rail < railLen; rail++) {
            for (int col = 0; col < colLen; col++) {
                fence[rail][col] = '.';
            }
        }
        int rail = 0;
        boolean dirDown = true;
        for (int col = 0; col < colLen; col++) {
            if (rail == 0) {
                dirDown = true;
            } else if (rail == railLen - 1) {
                dirDown = false;
            }
            fence[rail][col] = plainText.charAt(col);
            if (dirDown) {
                rail++;
            } else {
                rail--;
            }
        }
        StringBuilder cipherText = new StringBuilder();
        for (int r = 0; r < railLen; r++) {
            for (int c = 0; c < colLen; c++) {
                if (fence[r][c] != '.') {
                    cipherText.append(fence[r][c]);
                }
            }
        }
        return cipherText.toString();
    }

    public static String fence_decode(String cipherText, int depth) {
        int railLen = depth;
        int txtLen = cipherText.length();
        int colLen = txtLen / railLen;
        char[][] fence = new char[railLen][colLen];
        for (int rail = 0; rail < railLen; rail++) {
            for (int col = 0; col < colLen; col++) {
                fence[rail][col] = '.';
            }
        }
        int rail = 0;
        boolean dirDown = true;
        for (int col = 0; col < colLen; col++) {
            if (rail == 0) {
                dirDown = true;
            } else if (rail == railLen - 1) {
                dirDown = false;
            }
            fence[rail][col] = '*';
            if (dirDown) {
                rail++;
            } else {
                rail--;
            }
        }
        int index = 0;
        for (int r = 0; r < railLen; r++) {
            for (int c = 0; c < colLen; c++) {
                if (fence[r][c] == '*' && index < txtLen) {
                    fence[r][c] = cipherText.charAt(index++);
                }
            }
        }
        rail = 0;
        dirDown = true;
        StringBuilder plainText = new StringBuilder();
        for (int col = 0; col < colLen; col++) {
            if (rail == 0) {
                dirDown = true;
            } else if (rail == railLen - 1) {
                dirDown = false;
            }
            plainText.append(fence[rail][col]);
            if (dirDown) {
                rail++;
            } else {
                rail--;
            }
        }
        return plainText.toString();
    }

    public void unblockUser(Long id) {
        UserEntity user = userRepo.findById(id).get();
        user.setStatus("ok");
        userRepo.save(user);
    }

    public void toggleBlockUser(Long id) {
        UserEntity user = userRepo.findById(id).get();
        if (user.getStatus().equals("ok")) {
            user.setStatus("ban");
        } else {
            user.setStatus("ok");
        }

        userRepo.save(user);
    }

    public void blockUser(Long id) {
        UserEntity user = userRepo.findById(id).get();
        user.setStatus("ban");
        userRepo.save(user);
    }

}
