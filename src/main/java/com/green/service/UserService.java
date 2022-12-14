package com.green.service;

import com.green.dao.UserDao;
import com.green.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;


    public List<UserVo> getList() {
        List<UserVo> vo = userDao.getList();
        return vo;
    }
}
