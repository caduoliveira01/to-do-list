package com.dev.backend.service;

import com.dev.backend.dto.TarefaDto;

import java.util.List;

public interface TarefaService {

    TarefaDto createTarefa(TarefaDto tarefaDto);

    TarefaDto getTarefaById(Long tarefaID);

    List<TarefaDto> getAllTarefas();

    TarefaDto updateTarefa(Long taredaId, TarefaDto updateTarefa);

    void deleteTarefa(Long tarefaId);
}
