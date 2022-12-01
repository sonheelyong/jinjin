package com.green.dao.impl;

import com.green.dao.UserDao;
import com.green.vo.UserVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("ADao")
public class UserDaoimpl implements UserDao {
    @Autowired
    SqlSession sqlSession;

    @Override
    public List<UserVo> getList() {
        List<UserVo> vo = sqlSession.selectList("User.getList");
        return vo;
    }
}
