package com.senai.datacenterapi.config;

import com.senai.datacenterapi.model.PerfilUsuario;
import com.senai.datacenterapi.model.Usuario;
import com.senai.datacenterapi.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminInitializer implements CommandLineRunner {

    private final UsuarioRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final String adminName;
    private final String adminEmail;
    private final String adminPassword;

    public AdminInitializer(
            UsuarioRepository repository,
            PasswordEncoder passwordEncoder,
            @Value("${app.admin.name:}") String adminName,
            @Value("${app.admin.email:}") String adminEmail,
            @Value("${app.admin.password:}") String adminPassword) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.adminName = adminName;
        this.adminEmail = adminEmail;
        this.adminPassword = adminPassword;
    }

    @Override
    public void run(String... args) {
        if (adminEmail.isBlank() || adminPassword.isBlank()) {
            return;
        }

        if (adminPassword.length() < 8) {
            throw new IllegalStateException("ADMIN_PASSWORD precisa ter pelo menos 8 caracteres");
        }

        repository.findByEmailIgnoreCase(adminEmail.trim()).orElseGet(() -> repository.save(
                new Usuario(
                        adminName.isBlank() ? "Administrador" : adminName.trim(),
                        adminEmail,
                        passwordEncoder.encode(adminPassword),
                        PerfilUsuario.ADMIN
                )
        ));
    }
}
