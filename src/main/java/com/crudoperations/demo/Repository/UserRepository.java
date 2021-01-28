package com.crudoperations.demo.Repository;

import com.crudoperations.demo.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Long> {
      @Query("Select u from user u where u.name=:name")
      UserModel findByName(@Param("name") String name);

    @Query("Select u from user u where u.id=:id")
    UserModel findUserById(@Param("id") Long id);



}
