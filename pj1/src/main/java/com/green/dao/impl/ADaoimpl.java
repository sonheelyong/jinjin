package com.green.dao.impl;

import com.green.dao.ADao;
import com.green.vo.BoardVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("ADao")
public class ADaoimpl implements ADao {
    @Autowired
    SqlSession sqlSession;
    @Override
    public List<BoardVo> getname() {
        List<BoardVo> name = sqlSession.selectList("A.A");

        return name;
    }
}
