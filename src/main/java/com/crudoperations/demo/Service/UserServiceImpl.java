package com.crudoperations.demo.Service;

import com.crudoperations.demo.Repository.UserRepository;
import com.crudoperations.demo.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("UserService")
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;



    @Override
    public UserModel findUserById(long id) {
        return userRepository.findUserById(id);
    }

    public UserModel findByName(String name) {
        return userRepository.findByName(name);
    }


    public void saveUser(UserModel user) {
        userRepository.save(user);
    }


    public void updateUser(UserModel user){
        saveUser(user);
    }

    public void deleteUserById(Long id){
        userRepository.deleteById(id);
    }

    public void deleteAllUsers(){
        userRepository.deleteAll();
    }

    public List<UserModel> findAllUsers(){
        return userRepository.findAll();
    }

    public boolean isUserExist(UserModel user) {
        return findByName(user.getName()) != null;
    }
}
