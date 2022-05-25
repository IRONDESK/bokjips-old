package com.bokjips.server.service;

import com.bokjips.server.domain.corp.dto.CorpRequestDto;
import com.bokjips.server.domain.corp.dto.CorpResponseDto;
import com.bokjips.server.domain.corp.entity.Corp;
import com.bokjips.server.domain.welfare.dto.WelfareRequestDto;
import com.bokjips.server.domain.welfare.dto.WelfareResponseDto;
import com.bokjips.server.domain.welfare.entity.Welfare;
import com.bokjips.server.util.dto.PageResponseDto;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface CorpService {
    CorpResponseDto insertCorp(CorpRequestDto dto) throws IOException;

    CorpResponseDto selectCorp(String corp_id) throws IOException;

    CorpResponseDto updateCorp(String corp_id, CorpRequestDto dto) throws IOException;

    String deleteCorp(String corp_id) throws IOException;

    PageResponseDto<CorpResponseDto,Corp> selectCorpList(Integer page, Integer size) throws IOException;
    default Corp dtoToCorpEntity(CorpRequestDto dto){
        return Corp.builder()
                .id(UUID.randomUUID().toString())
                .name(dto.getName())
                .site(dto.getSite())
                .career(dto.getCareer())
                .category(dto.getCategory())
                .stock(dto.isStock())
                .image(dto.getImage())
                .good(0l)
                .build();
    }

    default CorpResponseDto corpEntityToDto(Corp entity, Map<String, List<WelfareResponseDto>> welfareList) {
        return CorpResponseDto.builder()
                .corp_id(entity.getId())
                .career(entity.getCareer())
                .category(entity.getCategory())
                .image(entity.getImage())
                .good(entity.getGood())
                .name(entity.getName())
                .modDate(entity.getModDate())
                .regDate(entity.getRegDate())
                .site(entity.getSite())
                .stock(entity.isStock())
                .welfareList(welfareList)
                .build();
    }

    default CorpResponseDto corpPageToDto(Corp entity) {
        return CorpResponseDto.builder()
                .corp_id(entity.getId())
                .career(entity.getCareer())
                .category(entity.getCategory())
                .image(entity.getImage())
                .good(entity.getGood())
                .name(entity.getName())
                .modDate(entity.getModDate())
                .regDate(entity.getRegDate())
                .site(entity.getSite())
                .stock(entity.isStock())
                .build();
    }

    default Welfare dtoToWelfareEntity(Corp corpEntity,WelfareRequestDto dto) {
        return Welfare.builder()
                .id(UUID.randomUUID().toString())
                .title(dto.getTitle())
                .subtitle(dto.getSubTitle())
                .options(dto.getOptions())
                .corp(corpEntity)
                .build();
    }
}