package com.nsq.service;

import com.nsq.dto.QuestionDTO;
import com.nsq.model.Question;
import com.nsq.repository.QuestionRepository;
import com.nsq.repository.QuizRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public QuestionService(QuestionRepository questionRepository, QuizRepository quizRepository) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
    }

    public Question creeQuestion(QuestionDTO questionDTO) {
        Question question = new Question();
        question.setQuestion(questionDTO.getQuestion());
        question.setAnswer(questionDTO.getAnswer());
        question.setOption1(questionDTO.getOption1());
        question.setOption2(questionDTO.getOption2());
        question.setOption3(questionDTO.getOption3());
        quizRepository.getById(questionDTO.getIdQuiz()).getQuestionsList().add(question);
        return questionRepository.save(question);
    }
}
