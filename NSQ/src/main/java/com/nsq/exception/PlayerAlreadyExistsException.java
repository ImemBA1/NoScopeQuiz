package com.nsq.exception;

public class PlayerAlreadyExistsException extends Exception {
    public PlayerAlreadyExistsException(String message) {
        super(message);
    }
}
