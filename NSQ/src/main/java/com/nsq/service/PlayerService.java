package com.nsq.service;

import com.nsq.exception.PlayerAlreadyExistsException;
import com.nsq.model.Player;
import com.nsq.repository.PlayerRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

@Service
public class PlayerService {
    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player create(Player player) throws PlayerAlreadyExistsException {
        Assert.isTrue(player != null, "L'étudiant ne peut pas être vide");
        if (isNotValid(player))
            throw new PlayerAlreadyExistsException("Un compte existe déjà pour cet étudiant");
        return playerRepository.save(player);
    }

    private boolean isNotValid(Player player) {
        return playerRepository.existsByUsername(player.getUsername());
    }

    public Player getOneByEmailAndPassword(String username, String password) {
        if (!isUsernameAndPasswordValid(username, password))
            throw new RuntimeException("Username ou mot de passe invalide");
        return playerRepository.findOneByUsernameAndPassword(username, password);
    }

    private boolean isUsernameAndPasswordValid(String username, String password) {
        return playerRepository.existsByUsernameAndPassword(username, password);
    }
}
