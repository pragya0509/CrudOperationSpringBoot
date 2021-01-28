package com.crudoperations.demo.Controller;

import com.crudoperations.demo.Service.UserService;
import com.crudoperations.demo.model.UserModel;
import com.crudoperations.demo.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class RestApiController {

    public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);
    @Autowired
    UserService userService;

    // Retrieving all users
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<List<UserModel>> listAllUsers() {
        List<UserModel> users = userService.findAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<List<UserModel>>(users, HttpStatus.OK);
    }


    //retrieving single user based on name
    @RequestMapping(value = "/user/{name}", method = RequestMethod.GET)
    public ResponseEntity<?> FindByName(@PathVariable("name") String name) {
        UserModel user = userService.findByName(name);
        if (user == null) {
            logger.error("User with name {} not found.", name);
            return new ResponseEntity(new CustomErrorType("User with name" + name
                    + " not found"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<UserModel>(user, HttpStatus.OK);

    }

    //retrieving single user using id
    @RequestMapping(value = "/user/id/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> FindById(@PathVariable("id") Long id) {
        UserModel user = userService.findUserById(id);
        if (user == null) {
            logger.error("User with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("User with id" + id
                    + " not found"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<UserModel>(user, HttpStatus.OK);
    }
//creating a user

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody UserModel user, UriComponentsBuilder ucBuilder) {
        logger.info("Creating User : {}", user);

        if (userService.isUserExist(user)) {
            logger.error("Unable to create. A User with name {} already exist", user.getName());
            return new ResponseEntity(new CustomErrorType("Unable to create. A User with name " +
                    user.getName() + " already exist."), HttpStatus.CONFLICT);
        }
        userService.saveUser(user);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/user/{id}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }
    //Update a user
    @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody UserModel user) {
        logger.info("Updating User with id {}", id);

        UserModel currentUser = userService.findUserById(id);

        if (currentUser == null) {
            logger.error("Unable to update. User with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to update. User with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        currentUser.setName(user.getName());
        currentUser.setAge(user.getAge());
        currentUser.setSalary(user.getSalary());

        userService.updateUser(currentUser);
        return new ResponseEntity<UserModel>(currentUser, HttpStatus.OK);
    }
    // ------------------- Delete a User-----------------------------------------

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting User with id {}", id);

        UserModel user = userService.findUserById(id);
        if (user == null) {
            logger.error("Unable to delete. User with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        userService.deleteUserById(id);
        return new ResponseEntity<UserModel>(HttpStatus.NO_CONTENT);
    }

    // ------------------- Delete All Users-----------------------------

    @RequestMapping(value = "/user ", method = RequestMethod.DELETE)
    public ResponseEntity<UserModel> deleteAllUsers() {
        logger.info("Deleting All Users");

        userService.deleteAllUsers();
        return new ResponseEntity<UserModel>(HttpStatus.NO_CONTENT);
    }


}



    

