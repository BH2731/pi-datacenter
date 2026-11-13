package com.senai.datacenterapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "zona_cluster")
public class ZonaCluster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_zona")
    private Long idZona;

    @Column(name = "nome_zona", nullable = false, unique = true, length = 50)
    private String nomeZona;

    @Column(name = "descricao", length = 255)
    private String descricao;

    @Column(name = "ativo", nullable = false)
    private boolean ativo;

    public Long getIdZona() {
        return idZona;
    }

    public String getNomeZona() {
        return nomeZona;
    }

    public String getDescricao() {
        return descricao;
    }

    public boolean isAtivo() {
        return ativo;
    }
}
