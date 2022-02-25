package com.nsq.controller;

import com.nsq.dto.QuestionDTO;
import com.nsq.model.Question;
import com.nsq.service.QuestionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/question")
public class QuestionController {
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping("/ajouter_question")
    public ResponseEntity<?> creeQuestion(@RequestBody QuestionDTO questionDTO) {
        Question questionCree;
        try {
            questionCree = questionService.creeQuestion(questionDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erreur lors de la création de la question");
        }
        return ResponseEntity.ok(questionCree);
    }
}
