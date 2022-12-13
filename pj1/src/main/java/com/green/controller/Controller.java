package com.green.controller;


import com.green.service.UserService;
import com.green.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class Controller {
//111
    @Autowired
    private UserService userService;


    @GetMapping("/SignUp")
    public void SingUp(@RequestParam String id, @RequestParam String passwd){
        System.out.println(id);
        System.out.println(passwd);

    }

    @GetMapping("/List")
    public List<UserVo> getList() {

        List<UserVo> vo = userService.getList();
        System.out.println(vo);

    return vo;
    }



    }