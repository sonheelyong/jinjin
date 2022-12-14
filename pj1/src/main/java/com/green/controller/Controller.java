package com.green.controller;


import com.green.service.UserService;
import com.green.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class Controller {

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


<<<<<<< HEAD
=======
    @RequestMapping(value= "/User/Registry", method=RequestMethod.POST, produces = "application/json")
    public void Registry(@RequestBody Map<String, Object> param){

        System.out.println(param);

    }


>>>>>>> a4e969a7bd6bfc9f96835b016e7e6379aea44c8f

    }