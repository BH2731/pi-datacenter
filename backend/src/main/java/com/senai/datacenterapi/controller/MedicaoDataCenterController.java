package com.senai.datacenterapi.controller;
import com.senai.datacenterapi.model.MedicaoDataCenter;
import com.senai.datacenterapi.repository.MedicaoDataCenterRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/medicoes")
public class MedicaoDataCenterController {

    private final MedicaoDataCenterRepository repository;

    public MedicaoDataCenterController(MedicaoDataCenterRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicaoDataCenter> buscarPorId(@PathVariable("id") Long id) {
        return ResponseEntity.of(repository.findById(id));
    }
}
