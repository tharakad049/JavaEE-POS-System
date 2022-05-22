package DAO;

import DAO.Custom.Impl.CustomerDAOImpl;
import DAO.Custom.Impl.ItemDAOImpl;
import DAO.Custom.Impl.OrderDAOImpl;
import DAO.Custom.Impl.OrderDetailDAOImpl;

public class DAOFactory {
    private static DAOFactory daoFactory;

    private DAOFactory(){

    }

    public static DAOFactory getDaoFactory(){
        if (daoFactory == null){
            daoFactory = new DAOFactory();
        }
        return daoFactory;
    }

    public enum DAOTypes{
        CUSTOMER,ITEM,ORDER,ORDERDETAIL
    }

    public SuperDAO getDAO(DAOTypes types){
        switch (types){
            case CUSTOMER:
                return (SuperDAO) new CustomerDAOImpl();
            case ITEM:
                return (SuperDAO) new ItemDAOImpl();
            case ORDER:
                return (SuperDAO) new OrderDAOImpl();
            case ORDERDETAIL:
                return (SuperDAO) new OrderDetailDAOImpl();
            default:
                return null;
        }
    }
}
