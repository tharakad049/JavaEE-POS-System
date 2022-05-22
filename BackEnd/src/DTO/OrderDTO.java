package DTO;

import java.util.ArrayList;

public class OrderDTO {
    private String orderId;
    private String customerId;
    private String orderDate;
    private double discount;
    private double cost;
    private ArrayList<OrderDetailDTO> items;

    public OrderDTO() {
    }

    public OrderDTO(String orderId, String customerId, String orderDate, double discount, double cost) {
        this.setOrderId(orderId);
        this.setCustomerId(customerId);
        this.setOrderDate(orderDate);
        this.setDiscount(discount);
        this.setCost(cost);
    }

    public OrderDTO(String orderId, String customerId, String orderDate, double discount, double cost, ArrayList<OrderDetailDTO> items) {
        this.setOrderId(orderId);
        this.setCustomerId(customerId);
        this.setOrderDate(orderDate);
        this.setDiscount(discount);
        this.setCost(cost);
        this.setItems(items);
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public ArrayList<OrderDetailDTO> getItems() {
        return items;
    }

    public void setItems(ArrayList<OrderDetailDTO> items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderId='" + orderId + '\'' +
                ", customerId='" + customerId + '\'' +
                ", orderDate='" + orderDate + '\'' +
                ", discount=" + discount +
                ", cost=" + cost +
                ", items=" + items +
                '}';
    }
}
