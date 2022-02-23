package com.nsq.controller;

import com.nsq.model.Player;
import com.nsq.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class PlayerController {
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Player player) {
        Player createdPlayer;
        try {
            createdPlayer = playerService.create(player);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPlayer);
    }

    @GetMapping("/{username}/{password}")
    public ResponseEntity<?> login(@PathVariable String username, @PathVariable String password) {
        Player player;
        try {
            player = playerService.getOneByEmailAndPassword(username, password);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
        return ResponseEntity.ok(player);
    }
}
