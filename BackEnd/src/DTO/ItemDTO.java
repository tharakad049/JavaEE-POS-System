package DTO;

public class ItemDTO {
    private String itemCode;
    private String itemName;
    private int quantity;
    private String unitPrice;
    private String discount;

    public ItemDTO() {
    }

    public ItemDTO(String itemCode, String itemName, int quantity, String unitPrice, String discount) {
        this.setItemCode(itemCode);
        this.setItemName(itemName);
        this.setQuantity(quantity);
        this.setUnitPrice(unitPrice);
        this.setDiscount(discount);
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    @Override
    public String toString() {
        return "ItemDTO{" +
                "itemCode='" + itemCode + '\'' +
                ", itemName='" + itemName + '\'' +
                ", quantity=" + quantity +
                ", unitPrice='" + unitPrice + '\'' +
                ", discount='" + discount + '\'' +
                '}';
    }
}
