package com.senai.datacenterapi.dto;

import java.math.BigDecimal;

public interface ResumoDiario {
    String getZona();
    BigDecimal getConsumoTotalKwh();
    BigDecimal getConsumoAguaLitros();
}
