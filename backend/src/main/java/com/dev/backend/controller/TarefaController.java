package com.dev.backend.controller;

import com.dev.backend.dto.TarefaDto;
import com.dev.backend.service.TarefaService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {

    private TarefaService tarefaService;

    //criando um add Tarefa
    @PostMapping
    public ResponseEntity<TarefaDto> createTarefa(@RequestBody TarefaDto tarefaDto){
        TarefaDto savedTarefa =tarefaService.createTarefa(tarefaDto);
        return new ResponseEntity<>(savedTarefa, HttpStatus.CREATED);
    }

    //criando get tarefa por id
    @GetMapping("{id}")
    public ResponseEntity<TarefaDto> getTarefaById(@PathVariable("id") Long tarefaId){
        TarefaDto tarefaDto = tarefaService.getTarefaById(tarefaId);
        return ResponseEntity.ok(tarefaDto);
    }

    //criando get todas tarefas
    @GetMapping
    public ResponseEntity<List<TarefaDto>> getAllTarefas(){
        List<TarefaDto> tarefas= tarefaService.getAllTarefas();
        return ResponseEntity.ok(tarefas);
    }

    //criando update de tareda
    @PutMapping("{id}")
    public ResponseEntity<TarefaDto> updateTarefa(@PathVariable("id") Long tarefaId,@RequestBody TarefaDto updateTarefa){
        TarefaDto tarefaDto = tarefaService.updateTarefa(tarefaId, updateTarefa);
        return ResponseEntity.ok(tarefaDto);
    }

    //criando delete de tarefa
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTarefa(@PathVariable("id") Long tarefaId){
        tarefaService.deleteTarefa(tarefaId);
        return ResponseEntity.ok("Tarefa excluida");
    }

    public TarefaController(TarefaService tarefaService) {
        this.tarefaService = tarefaService;
    }
}
