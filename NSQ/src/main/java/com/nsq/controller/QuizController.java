package com.nsq.controller;

import com.nsq.model.Quiz;
import com.nsq.service.QuizService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/quiz")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @PostMapping("/ajouter_quiz")
    public ResponseEntity<?> creeQuiz(@RequestBody Quiz quiz) {
        Quiz quizCree;
        try {
            quizCree = quizService.creeQuiz(quiz);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok(quizCree);
    }
}
