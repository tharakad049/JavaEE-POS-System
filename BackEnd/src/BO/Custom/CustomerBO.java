package BO.Custom;

import DTO.CustomerDTO;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public interface CustomerBO {
    boolean saveCustomer(CustomerDTO customerDTO, Connection connection) throws SQLException;

    boolean updateCustomer(CustomerDTO customerDTO, Connection connection) throws SQLException;

    boolean deleteCustomer(String id, Connection connection) throws SQLException;

    ArrayList<CustomerDTO> getAllCustomers(Connection connection) throws SQLException;

    List<String> getCustomerIds(Connection connection) throws SQLException;
}
