package com.senai.datacenterapi.repository;

import com.senai.datacenterapi.model.StatusEficiencia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusEficienciaRepository
        extends JpaRepository<StatusEficiencia, Long> {
}
