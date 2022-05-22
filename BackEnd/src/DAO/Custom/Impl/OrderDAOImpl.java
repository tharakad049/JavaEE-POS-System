package DAO.Custom.Impl;

import DAO.CrudUtil;
import DAO.Custom.OrderDAO;
import Entity.Order;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class OrderDAOImpl implements OrderDAO {
    @Override
    public boolean add(Order order, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate(
                "INSERT INTO `order` VALUES(?,?,?,?,?)",
                connection,
                order.getOrderId(),order.getCustomerId(),order.getOrderDate(),order.getDiscount(), order.getCost()
        );
    }

    @Override
    public boolean update(Order order, Connection connection) throws SQLException {
        throw new UnsupportedOperationException("No Supported Yet.");
    }

    @Override
    public boolean delete(String s, Connection connection) throws SQLException {
        throw new UnsupportedOperationException("No Supported Yet.");
    }

    @Override
    public Order search(String id, Connection connection) throws SQLException {
        ResultSet rst = CrudUtil.executeQuery(
                "SELECT * FROM `order` WHERE orderId=?",
                connection,
                id
        );
        if (rst.next()){
            Order order = new Order(
                    rst.getString(1),
                    rst.getString(2),
                    rst.getString(3),
                    rst.getDouble(4),
                    rst.getDouble(5)
            );
            System.out.println(order);
            return order;
        }else {
            return null;
        }
    }

    @Override
    public ArrayList<Order> getAll(Connection connection) throws SQLException {
        throw new UnsupportedOperationException("No Supported Yet.");
    }

    @Override
    public String getOrderId(Connection connection) throws SQLException {
        ResultSet rst = CrudUtil.executeQuery("SELECT orderId FROM `order` ORDER BY orderId DESC LIMIT 1",
                connection
        );
        if (rst.next()){
            return rst.getString(1);
        }else {
            return null;
        }
    }
}
