package DAO.Custom;

import Entity.Customer;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public interface CustomerDAO {
    boolean add(Customer customer, Connection connection) throws SQLException;

    boolean update(Customer customer, Connection connection) throws SQLException;

    boolean delete(String id, Connection connection) throws SQLException;

    Customer search(String id, Connection connection) throws SQLException;

    ArrayList<Customer> getAll(Connection connection) throws SQLException;

    List<String> getIds(Connection connection) throws SQLException;
}
