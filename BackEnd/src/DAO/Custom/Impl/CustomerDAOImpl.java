package DAO.Custom.Impl;

import DAO.CrudUtil;
import DAO.Custom.CustomerDAO;
import Entity.Customer;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CustomerDAOImpl implements CustomerDAO {

    @Override
    public boolean add(Customer customer, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate(
                "INSERT INTO Customer VALUES(?,?,?,?)",
                connection,
                customer.getCustomerId(), customer.getCustomerName(),customer.getAddress(), customer.getSalary()
        );
    }

    @Override
    public boolean update(Customer customer, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate("UPDATE Customer SET name=?,address=?,salary=? WHERE id=?",
                connection,
                customer.getCustomerName(),customer.getAddress(),customer.getSalary(),customer.getCustomerId()
        );
    }

    @Override
    public boolean delete(String id, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate("DELETE FROM Customer WHERE id=?",
                connection,
                id
        );
    }

    @Override
    public Customer search(String id, Connection connection) throws SQLException {
        ResultSet rst = CrudUtil.executeQuery("SELECT * FROM Customer WHERE id=?",
                connection,
                id
        );
        if (rst.next()){
            return new Customer(
                    rst.getString(1),
                    rst.getString(2),
                    rst.getString(3),
                    rst.getString(4)
            );
        }else {
            return null;
        }
    }

    @Override
    public ArrayList<Customer> getAll(Connection connection) throws SQLException {
        ResultSet rst = CrudUtil.executeQuery("SELECT * FROM Customer",
                connection
        );
        ArrayList<Customer> customers = new ArrayList<>();
        while (rst.next()){
            customers.add(new Customer(
                    rst.getString(1),
                    rst.getString(2),
                    rst.getString(3),
                    rst.getString(4)
            ));
        }
        return customers;
    }

    @Override
    public List<String> getIds(Connection connection) throws SQLException {
        ResultSet rst = CrudUtil.executeQuery("SELECT id FROM Customer ORDER BY id DESC LIMIT 1",
                connection
        );
        List<String> ids = new ArrayList<>();
        while (rst.next()) {
            ids.add(rst.getString(1));
        }
        return ids;
    }

}
