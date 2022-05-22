package BO.Custom.Impl;

import BO.Custom.ItemBo;
import DAO.Custom.ItemDAO;
import DAO.DAOFactory;
import DTO.ItemDTO;
import Entity.Item;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

public class ItemBoImpl implements ItemBo {

    private ItemDAO itemDAO = (ItemDAO) DAOFactory.getDaoFactory().getDAO(DAOFactory.DAOTypes.ITEM);

    @Override
    public boolean saveItem(ItemDTO itemDTO, Connection connection) throws SQLException {
        return itemDAO.add(new Item(
                        itemDTO.getItemCode(),
                        itemDTO.getItemName(),
                        itemDTO.getQuantity(),
                        itemDTO.getUnitPrice()),
                connection
        );
    }

    @Override
    public boolean updateItem(ItemDTO itemDTO, Connection connection) throws SQLException {
        return itemDAO.update(new Item(
                        itemDTO.getItemCode(),
                        itemDTO.getItemName(),
                        itemDTO.getQuantity(),
                        itemDTO.getUnitPrice()),
                connection
        );
    }

    @Override
    public boolean deleteItem(String id, Connection connection) throws SQLException {
        return itemDAO.delete(id,connection);
    }

    @Override
    public ArrayList<ItemDTO> getAllItems(Connection connection) throws SQLException {
        ArrayList<Item> all = itemDAO.getAll(connection);
        ArrayList<ItemDTO> allItems = new ArrayList<>();
        for (Item item : all) {
            allItems.add(new ItemDTO(
                    item.getItemCode(),
                    item.getItemName(),
                    item.getQuantity(),
                    item.getUnitPrice()
            ));
        }
        return allItems;
    }
}
