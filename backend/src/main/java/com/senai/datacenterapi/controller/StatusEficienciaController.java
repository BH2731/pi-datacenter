package com.senai.datacenterapi.controller;

import com.senai.datacenterapi.model.StatusEficiencia;
import com.senai.datacenterapi.repository.StatusEficienciaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/status-eficiencia")
public class StatusEficienciaController {

    private final StatusEficienciaRepository repository;

    public StatusEficienciaController(StatusEficienciaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<StatusEficiencia> listar() {
        return repository.findAll();
    }
}
