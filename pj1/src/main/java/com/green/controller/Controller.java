package com.green.controller;


import com.green.service.AService;
import com.green.vo.BoardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private AService aService;

    @GetMapping("/admin")
    public List<BoardVo> getAdmin() {
        List<BoardVo> name = aService.getname();

        return name;
    }
}
