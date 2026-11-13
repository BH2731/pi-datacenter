package com.senai.datacenterapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "turno")
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_turno")
    private Long idTurno;

    @Column(name = "nome_turno", nullable = false, unique = true, length = 20)
    private String nomeTurno;

    public Long getIdTurno() {
        return idTurno;
    }

    public String getNomeTurno() {
        return nomeTurno;
    }
}
