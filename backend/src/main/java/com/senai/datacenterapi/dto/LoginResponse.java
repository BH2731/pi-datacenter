package com.senai.datacenterapi.dto;

public record LoginResponse(String token, String tokenType, long expiresIn, UsuarioResponse user) {
}
