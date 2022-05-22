package Entity;

public class Customer {
    private String customerId;
    private String customerName;
    private String address;
    private String salary;

    public Customer() {

    }

    public Customer(String customerId, String customerName, String address, String salary) {
        this.setCustomerId(customerId);
        this.setCustomerName(customerName);
        this.setAddress(address);
        this.setSalary(salary);
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId='" + customerId + '\'' +
                ", customerName='" + customerName + '\'' +
                ", address='" + address + '\'' +
                ", salary='" + salary + '\'' +
                '}';
    }
}
