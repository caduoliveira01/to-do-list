package com.dev.backend.service.impl;

import com.dev.backend.dto.TarefaDto;
import com.dev.backend.entity.Tarefa;
import com.dev.backend.exception.ResourceNotFoundException;
import com.dev.backend.mapper.TarefaMapper;
import com.dev.backend.repository.TarefaRepository;
import com.dev.backend.service.TarefaService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TarefaServiceImpl implements TarefaService {

    private TarefaRepository tarefaRepository;

    @Override
    public TarefaDto createTarefa(TarefaDto tarefaDto){

        Tarefa tarefa = TarefaMapper.mapToTarefa(tarefaDto);
        Tarefa savedTarefa = tarefaRepository.save(tarefa);

        return TarefaMapper.mapToTarefaDto(savedTarefa);
    }

    @Override
    public TarefaDto getTarefaById(Long tarefaID) {
        Tarefa tarefa = tarefaRepository.findById(tarefaID)
                .orElseThrow(()->
                        new ResourceNotFoundException("Id de tarefa não existe:" + tarefaID));
        return TarefaMapper.mapToTarefaDto(tarefa);
    }

    @Override
    public List<TarefaDto> getAllTarefas() {
        List<Tarefa> tarefas = tarefaRepository.findAll();
        return tarefas.stream().map((tarefa)-> TarefaMapper.mapToTarefaDto(tarefa)).collect(Collectors.toList());
    }

    @Override
    public TarefaDto updateTarefa(Long tarefaId, TarefaDto updateTarefa) {
       Tarefa tarefa = tarefaRepository.findById(tarefaId).orElseThrow(
               () -> new ResourceNotFoundException("Id de tarefa não existe:" + tarefaId)
       );
       tarefa.setTitle(updateTarefa.getTitle());
       tarefa.setDescription(updateTarefa.getDescription());
       tarefa.setStatus(updateTarefa.getStatus());

       Tarefa updateTarefaObj = tarefaRepository.save(tarefa);
        return TarefaMapper.mapToTarefaDto(updateTarefaObj);
    }

    @Override
    public void deleteTarefa(Long tarefaId) {
        Tarefa tarefa = tarefaRepository.findById(tarefaId).orElseThrow(
                () -> new ResourceNotFoundException("Id de tarefa não existe"+tarefaId)
        );
        tarefaRepository.deleteById(tarefaId);
    }

    public TarefaServiceImpl(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }
}
