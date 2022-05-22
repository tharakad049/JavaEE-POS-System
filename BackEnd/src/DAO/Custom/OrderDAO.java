package DAO.Custom;

import Entity.Order;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public interface OrderDAO {
    boolean add(Order order, Connection connection) throws SQLException;

    boolean update(Order order, Connection connection) throws SQLException;

    boolean delete(String s, Connection connection) throws SQLException;

    Order search(String id, Connection connection) throws SQLException;

    ArrayList<Order> getAll(Connection connection) throws SQLException;

    String getOrderId(Connection connection) throws SQLException;
}
