package com.nsq.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class Question {
    @Id
    @GeneratedValue
    private Long idQuestion;

    private String question;

    private String answer;
    private String option1;
    private String option2;
    private String option3;
    private String option4;


}
