package DAO.Custom;

import Entity.OrderDetail;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public interface OrderDetailDAO {

    boolean add(OrderDetail orderDetail, Connection connection) throws SQLException;

    boolean update(OrderDetail orderDetail, Connection connection) throws SQLException;

    boolean delete(String s, Connection connection) throws SQLException;

    OrderDetail search(String id, Connection connection) throws SQLException;

    ArrayList<OrderDetail> getAll(Connection connection) throws SQLException;

    ArrayList<OrderDetail> searchOrderDetail(String id, Connection connection) throws SQLException;
}
