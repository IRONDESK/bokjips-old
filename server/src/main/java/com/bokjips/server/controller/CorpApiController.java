package com.bokjips.server.controller;

import com.bokjips.server.domain.corp.dto.CorpRequestDto;
import com.bokjips.server.domain.corp.dto.CorpResponseDto;
import com.bokjips.server.service.CorpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/corp")
@Log4j2
@RequiredArgsConstructor
public class CorpApiController {

    private final CorpService corpService;

    @PostMapping("/insert")
    public ResponseEntity<CorpResponseDto> insertCorp(@RequestBody CorpRequestDto dto){
        return new ResponseEntity<>(corpService.insertCorp(dto), HttpStatus.OK);
    }
}
