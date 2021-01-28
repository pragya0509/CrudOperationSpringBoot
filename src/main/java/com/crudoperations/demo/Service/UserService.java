package com.crudoperations.demo.Service;

import com.crudoperations.demo.model.UserModel;

import java.util.List;
import java.util.Optional;

public interface UserService {

    UserModel findUserById(long id);

    UserModel findByName(String name);

    void saveUser(UserModel user);

    void updateUser(UserModel user);

    void deleteUserById(Long id);

    void deleteAllUsers();

    List<UserModel> findAllUsers();

    boolean isUserExist(UserModel user);


}
