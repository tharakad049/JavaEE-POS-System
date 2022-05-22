package BO.Custom;

import DTO.ItemDTO;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public interface ItemBo {
    boolean saveItem(ItemDTO itemDTO, Connection connection) throws SQLException;

    boolean updateItem(ItemDTO itemDTO, Connection connection) throws SQLException;

    boolean deleteItem(String id, Connection connection) throws SQLException;

    ArrayList<ItemDTO> getAllItems(Connection connection) throws SQLException;
}
