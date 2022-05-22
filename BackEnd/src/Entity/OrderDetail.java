package Entity;

public class OrderDetail {
    private String orderId;
    private String itemCode;
    private String itemName;
    private int itemQty;
    private double unitPrice;

    public OrderDetail() {
    }

    public OrderDetail(String orderId, String itemCode, String itemName, int itemQty, double unitPrice) {
        this.setOrderId(orderId);
        this.setItemCode(itemCode);
        this.setItemName(itemName);
        this.setItemQty(itemQty);
        this.setUnitPrice(unitPrice);
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getItemQty() {
        return itemQty;
    }

    public void setItemQty(int itemQty) {
        this.itemQty = itemQty;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderId='" + orderId + '\'' +
                ", itemCode='" + itemCode + '\'' +
                ", itemName='" + itemName + '\'' +
                ", itemQty=" + itemQty +
                ", unitPrice=" + unitPrice +
                '}';
    }
}
