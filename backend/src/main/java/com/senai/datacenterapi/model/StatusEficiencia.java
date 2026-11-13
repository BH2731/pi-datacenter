package com.senai.datacenterapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "status_eficiencia")
public class StatusEficiencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_status")
    private Long idStatus;

    @Column(name = "nome_status", nullable = false, unique = true, length = 20)
    private String nomeStatus;

    @Column(name = "descricao", length = 255)
    private String descricao;

    public Long getIdStatus() {
        return idStatus;
    }

    public String getNomeStatus() {
        return nomeStatus;
    }

    public String getDescricao() {
        return descricao;
    }
}
