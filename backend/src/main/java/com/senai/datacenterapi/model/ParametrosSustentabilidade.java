package com.senai.datacenterapi.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "parametros_sustentabilidade")
public class ParametrosSustentabilidade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_parametro")
    private Long idParametro;

    @Column(name = "data_inicio", nullable = false)
    private LocalDate dataInicio;

    @Column(name = "data_fim")
    private LocalDate dataFim;

    @Column(name = "tarifa_energia_kwh", nullable = false, precision = 10, scale = 4)
    private BigDecimal tarifaEnergiaKwh;

    @Column(name = "tarifa_agua_m3", nullable = false, precision = 10, scale = 4)
    private BigDecimal tarifaAguaM3;

    @Column(name = "fator_emissao_co2", nullable = false, precision = 10, scale = 6)
    private BigDecimal fatorEmissaoCo2;

    @Column(name = "descricao", length = 255)
    private String descricao;

    public Long getIdParametro() {
        return idParametro;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public BigDecimal getTarifaEnergiaKwh() {
        return tarifaEnergiaKwh;
    }

    public BigDecimal getTarifaAguaM3() {
        return tarifaAguaM3;
    }

    public BigDecimal getFatorEmissaoCo2() {
        return fatorEmissaoCo2;
    }

    public String getDescricao() {
        return descricao;
    }
}
