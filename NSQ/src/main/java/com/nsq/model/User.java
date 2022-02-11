package com.nsq.model;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
public abstract class User implements Serializable {
    @Id
    @GeneratedValue
    private Long id;

    private String firstName;

    private String lastName;

    private String password;

    private String email;


    private String phone;

}
