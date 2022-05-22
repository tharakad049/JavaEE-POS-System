package BO;

import BO.Custom.Impl.CustomerBoImpl;
import BO.Custom.Impl.ItemBoImpl;
import BO.Custom.Impl.PlaceOrderBoImpl;

public class BOFactory {
    private static BOFactory boFactory;

    private BOFactory(){

    }

    public static BOFactory getBoFactory(){
        if (boFactory == null){
            boFactory = new BOFactory();
        }
        return boFactory;
    }

    public enum BOTypes{
        CUSTOMER,ITEM,PLACEORDER
    }

    public SuperBO getBO(BOTypes types){
        switch (types){
            case CUSTOMER:
                return (SuperBO) new CustomerBoImpl();
            case ITEM:
                return (SuperBO) new ItemBoImpl();
            case PLACEORDER:
                return new PlaceOrderBoImpl();
            default:
                return null;
        }
    }
}
