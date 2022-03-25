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

    private String titre;

    private String categorie;

    private String description;

    private String difficulte;

    private String score;

    @OneToMany
    private List<Question> questionsList;

    public Quiz() {
    }

    public Quiz(String categorie, String description, String difficulte, List<Question> questionsList, String titre,String score) {
        this.titre = titre;
        this.categorie = categorie;
        this.description = description;
        this.difficulte = difficulte;
        this.questionsList = questionsList;
        this.score = score;
    }
}

