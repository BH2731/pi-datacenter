package com.senai.datacenterapi.controller;

import com.senai.datacenterapi.model.Turno;
import com.senai.datacenterapi.repository.TurnoRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/turnos")
public class TurnoController {

    private final TurnoRepository repository;

    public TurnoController(TurnoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Turno> listar() {
        return repository.findAll();
    }
}
