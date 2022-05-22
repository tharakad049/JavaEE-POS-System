package Entity;

public class Item {
    private String itemCode;
    private String itemName;
    private String qtyOnHand;
    private double unitPrice;

    public Item() {
    }

    public Item(String itemCode, String itemName, String qtyOnHand, double unitPrice) {
        this.setItemCode(itemCode);
        this.setItemName(itemName);
        this.setQtyOnHand(qtyOnHand);
        this.setUnitPrice(unitPrice);
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

    public String getQtyOnHand() {
        return qtyOnHand;
    }

    public void setQtyOnHand(String qtyOnHand) {
        this.qtyOnHand = qtyOnHand;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    @Override
    public String toString() {
        return "Item{" +
                "itemCode='" + itemCode + '\'' +
                ", itemName='" + itemName + '\'' +
                ", qtyOnHand='" + qtyOnHand + '\'' +
                ", unitPrice=" + unitPrice +
                '}';
    }
}
