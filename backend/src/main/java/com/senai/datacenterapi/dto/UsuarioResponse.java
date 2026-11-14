package com.senai.datacenterapi.dto;

import com.senai.datacenterapi.model.Usuario;

public record UsuarioResponse(Long id, String name, String email, String role) {

    public static UsuarioResponse from(Usuario usuario) {
        return new UsuarioResponse(
                usuario.getIdUsuario(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getPerfil().name()
        );
    }
}
