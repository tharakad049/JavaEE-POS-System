package DAO.Custom;

import Entity.Item;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public interface ItemDAO{

    boolean add(Item item, Connection connection) throws SQLException;

    boolean update(Item item, Connection connection) throws SQLException;

    boolean delete(String id, Connection connection) throws SQLException;

    ArrayList<Item> getAll(Connection connection) throws SQLException;
}
