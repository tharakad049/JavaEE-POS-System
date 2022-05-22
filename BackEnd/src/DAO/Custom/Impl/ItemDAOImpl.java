package DAO.Custom.Impl;

import DAO.CrudUtil;
import DAO.Custom.ItemDAO;
import Entity.Item;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ItemDAOImpl implements ItemDAO {

    @Override
    public boolean add(Item item, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate(
                "INSERT INTO item VALUES(?,?,?,?)",
                connection,
                item.getItemCode(), item.getItemName(), item.getQuantity(), item.getUnitPrice()
        );
    }

    @Override
    public boolean update(Item item, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate(
                "UPDATE item SET name=?,qty=?,price=? where code=?",
                connection,
                item.getItemName(), item.getQuantity(), item.getUnitPrice(),item.getItemCode()
        );
    }

    @Override
    public boolean delete(String id, Connection connection) throws SQLException {
        return CrudUtil.executeUpdate("DELETE FROM item WHERE code=?",
                connection,
                id
        );
    }

    @Override
    public ArrayList<Item> getAll(Connection connection) throws SQLException {
        ResultSet rst = CrudUtil.executeQuery("SELECT * FROM item",
                connection
        );
        ArrayList<Item> items = new ArrayList<>();
        while (rst.next()){
            items.add(new Item(
                    rst.getString(1),
                    rst.getString(2),
                    rst.getInt(3),
                    rst.getString(4)
            ));
        }
        return items;
    }
}
