package com.nsq.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Quiz {
    @Id
    @GeneratedValue
    private Long idQuiz;

    private String categorie;

    private String difficulte;

    @OneToMany
    private List<Question> questions;

    public Quiz() {
    }

    public Quiz(String categorie, String difficulte, List<Question> questions) {
        this.categorie = categorie;
        this.difficulte = difficulte;
        this.questions = questions;
    }
}

