package com.senai.datacenterapi.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "medicao_datacenter")
public class MedicaoDataCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_medicao")
    private Long idMedicao;

    @Column(name = "id_registro_csv", nullable = false, unique = true)
    private Long idRegistroCsv;

    @Column(name = "data_hora", nullable = false)
    private LocalDateTime dataHora;

    @Column(name = "id_zona", nullable = false)
    private Long idZona;

    @Column(name = "id_turno", nullable = false)
    private Long idTurno;

    @Column(name = "id_status", nullable = false)
    private Long idStatus;

    @Column(name = "consumo_total_kwh", nullable = false, precision = 20, scale = 14)
    private BigDecimal consumoTotalKwh;

    @Column(name = "energia_gpus_kwh", nullable = false, precision = 20, scale = 14)
    private BigDecimal energiaGpusKwh;

    @Column(name = "energia_refrigeracao_kwh", nullable = false, precision = 20, scale = 14)
    private BigDecimal energiaRefrigeracaoKwh;

    @Column(name = "consumo_agua_l", nullable = false, precision = 20, scale = 14)
    private BigDecimal consumoAguaL;

    @Column(name = "agua_reaproveitada_l", nullable = false, precision = 20, scale = 14)
    private BigDecimal aguaReaproveitadaL;

    @Column(name = "utilizacao_gpus_pct", nullable = false, precision = 20, scale = 14)
    private BigDecimal utilizacaoGpusPct;

    @Column(name = "eficiencia_energetica_pct", nullable = false, precision = 20, scale = 14)
    private BigDecimal eficienciaEnergeticaPct;

    @Column(name = "eficiencia_hidrica_pct", nullable = false, precision = 20, scale = 14)
    private BigDecimal eficienciaHidricaPct;

    protected MedicaoDataCenter() {
        // O JPA usa este construtor ao carregar uma medição do banco.
    }

    public Long getIdMedicao() {
        return idMedicao;
    }

    public Long getIdRegistroCsv() {
        return idRegistroCsv;
    }

    public LocalDateTime getDataHora() {
        return dataHora;
    }

    public Long getIdZona() {
        return idZona;
    }

    public Long getIdTurno() {
        return idTurno;
    }

    public Long getIdStatus() {
        return idStatus;
    }

    public BigDecimal getConsumoTotalKwh() {
        return consumoTotalKwh;
    }

    public BigDecimal getEnergiaGpusKwh() {
        return energiaGpusKwh;
    }

    public BigDecimal getEnergiaRefrigeracaoKwh() {
        return energiaRefrigeracaoKwh;
    }

    public BigDecimal getConsumoAguaL() {
        return consumoAguaL;
    }

    public BigDecimal getAguaReaproveitadaL() {
        return aguaReaproveitadaL;
    }

    public BigDecimal getUtilizacaoGpusPct() {
        return utilizacaoGpusPct;
    }

    public BigDecimal getEficienciaEnergeticaPct() {
        return eficienciaEnergeticaPct;
    }

    public BigDecimal getEficienciaHidricaPct() {
        return eficienciaHidricaPct;
    }
}