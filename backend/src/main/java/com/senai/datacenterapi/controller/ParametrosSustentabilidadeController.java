package com.senai.datacenterapi.controller;

import com.senai.datacenterapi.model.ParametrosSustentabilidade;
import com.senai.datacenterapi.repository.ParametrosSustentabilidadeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/parametros-sustentabilidade")
public class ParametrosSustentabilidadeController {

    private final ParametrosSustentabilidadeRepository repository;

    public ParametrosSustentabilidadeController(ParametrosSustentabilidadeRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ParametrosSustentabilidade> listar() {
        return repository.findAll();
    }
}