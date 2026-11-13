package com.senai.datacenterapi.controller;

import com.senai.datacenterapi.model.ZonaCluster;
import com.senai.datacenterapi.repository.ZonaClusterRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/zonas")
public class ZonaClusterController {

    private final ZonaClusterRepository repository;

    public ZonaClusterController(ZonaClusterRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ZonaCluster> listar() {
        return repository.findAll();
    }
}