package com.dev.backend.mapper;

import com.dev.backend.dto.TarefaDto;
import com.dev.backend.entity.Tarefa;

public class TarefaMapper {

    public static TarefaDto mapToTarefaDto(Tarefa tarefa){
        return new TarefaDto(
                tarefa.getId(),
                tarefa.getTitle(),
                tarefa.getDescription(),
                tarefa.getStatus()
        );
    }

    public static Tarefa mapToTarefa(TarefaDto tarefaDto){
        return new Tarefa(
                tarefaDto.getId(),
                tarefaDto.getTitle(),
                tarefaDto.getDescription(),
                tarefaDto.getStatus()
        );
    }
}
