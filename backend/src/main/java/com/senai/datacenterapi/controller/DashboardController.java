package com.senai.datacenterapi.controller;


import com.senai.datacenterapi.dto.ResumoDiario;
import com.senai.datacenterapi.repository.MedicaoDataCenterRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final MedicaoDataCenterRepository repository;

    public DashboardController(MedicaoDataCenterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/resumo-diario")
    public List<ResumoDiario> buscarResumoDiario(
            @RequestParam("data")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data) {
        return repository.buscarResumoDiario(data);
    }
}
