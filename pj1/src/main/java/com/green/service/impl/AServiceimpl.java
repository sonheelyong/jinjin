package com.green.service.impl;

import com.green.dao.ADao;
import com.green.vo.BoardVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.green.service.AService;

import java.util.List;

@Service
public class AServiceimpl implements AService {
    @Autowired
    private ADao aDao;

    @Override
    public List<BoardVo> getname() {
        List<BoardVo> name = aDao.getname();
        return name;
    }
}
