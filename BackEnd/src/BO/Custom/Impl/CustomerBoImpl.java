package BO.Custom.Impl;

import BO.Custom.CustomerBO;
import DAO.Custom.CustomerDAO;
import DAO.DAOFactory;
import DTO.CustomerDTO;
import Entity.Customer;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class CustomerBoImpl implements CustomerBO {

    private CustomerDAO customerDAO = (CustomerDAO) DAOFactory.getDaoFactory().getDAO(DAOFactory.DAOTypes.CUSTOMER);

    @Override
    public boolean saveCustomer(CustomerDTO customerDTO, Connection connection) throws SQLException {
        return customerDAO.add(new Customer(
                        customerDTO.getCustomerId(),
                        customerDTO.getCustomerName(),
                        customerDTO.getAddress(),
                        customerDTO.getSalary()),
                connection
        );
    }

    @Override
    public boolean updateCustomer(CustomerDTO customerDTO, Connection connection) throws SQLException {
        return customerDAO.update(new Customer(
                        customerDTO.getCustomerId(),
                        customerDTO.getCustomerName(),
                        customerDTO.getAddress(),
                        customerDTO.getSalary()),
                connection
        );
    }

    @Override
    public boolean deleteCustomer(String id, Connection connection) throws SQLException {
        return customerDAO.delete(id, connection);
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomers(Connection connection) throws SQLException {
        ArrayList<Customer> all = customerDAO.getAll(connection);
        ArrayList<CustomerDTO> allCustomer = new ArrayList<>();
        for (Customer customer : all) {
            allCustomer.add(new CustomerDTO(
                    customer.getCustomerId(),
                    customer.getCustomerName(),
                    customer.getAddress(),
                    customer.getSalary()
            ));
        }
        return allCustomer;
    }

    @Override
    public List<String> getCustomerIds(Connection connection) throws SQLException {
        return customerDAO.getIds(connection);
    }
}
