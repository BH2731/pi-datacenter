package com.senai.datacenterapi.repository;

import com.senai.datacenterapi.model.MedicaoDataCenter;
import org.springframework.data.jpa.repository.JpaRepository;

import com.senai.datacenterapi.dto.ResumoDiario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MedicaoDataCenterRepository
        extends JpaRepository<MedicaoDataCenter, Long> {

    @Query(value = """
        SELECT zona_cluster      AS zona,
               consumo_total_kwh AS consumoTotalKwh,
               consumo_agua_l    AS consumoAguaLitros
        FROM vw_resumo_diario
        WHERE data = :data
        ORDER BY zona_cluster
        """, nativeQuery = true)
    List<ResumoDiario> buscarResumoDiario(@Param("data") LocalDate data);
}
