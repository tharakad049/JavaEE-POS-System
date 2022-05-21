package Servlets;

import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@WebServlet(urlPatterns = "/order")
public class PlaceOrderServlet extends HttpServlet {

    @Resource(name = "java:comp/env/jdbc/pool")
    DataSource ds;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        JsonObjectBuilder objectBuilder = Json.createObjectBuilder();
        JsonObjectBuilder dataMsgBuilder = Json.createObjectBuilder();
        PrintWriter writer = resp.getWriter();

        resp.setStatus(HttpServletResponse.SC_OK);//200
        Connection connection = null;
        try {
            connection = ds.getConnection();
            ResultSet rst;
            PreparedStatement pstm;
            String option = req.getParameter("option");
            switch (option) {
                case "SelectCustomer":
                    String selectID = req.getParameter("CusID");
                    pstm = connection.prepareStatement("select * from customer where id=?");
                    pstm.setObject(1, selectID);
                    rst = pstm.executeQuery();
                    if (rst.next()) {
                        String cusName = rst.getString(2);
                        String cusAddress = rst.getString(3);
                        String cusSalary = rst.getString(4);
                        objectBuilder.add("name", cusName);
                        objectBuilder.add("address", cusAddress);
                        objectBuilder.add("salary", cusSalary);
                        arrayBuilder.add(objectBuilder.build());
                        System.out.println(cusName+""+cusAddress+""+cusSalary);
                    }
                    dataMsgBuilder.add("data", arrayBuilder.build());
                    dataMsgBuilder.add("massage", "Done");
                    dataMsgBuilder.add("status", 200);
                    writer.print(dataMsgBuilder.build());
                    break;

                case "GenerateOid":
                    rst = connection.prepareStatement("select oId from `order` order by oId desc limit 1").executeQuery();
                    if (rst.next()) {
                        int tempId = Integer.parseInt(rst.getString(1).split("-")[1]);
                        tempId += 1;
                        if (tempId < 10) {
                            objectBuilder.add("oId", "O00-00" + tempId);
                        } else if (tempId < 100) {
                            objectBuilder.add("oId", "O00-0" + tempId);
                        } else if (tempId < 1000) {
                            objectBuilder.add("oId", "O00-" + tempId);
                        }
                    } else {
                        objectBuilder.add("oId", "O00-000");
                    }

                    dataMsgBuilder.add("data", objectBuilder.build());
                    dataMsgBuilder.add("massage", "Done");
                    dataMsgBuilder.add("status", 200);
                    writer.print(dataMsgBuilder.build());
                    break;

                case "SelectItem":
                    String selectItemID = req.getParameter("itemCode");
                    pstm = connection.prepareStatement("select * from item where iCode=?");
                    pstm.setObject(1, selectItemID);
                    rst = pstm.executeQuery();
                    if (rst.next()) {
                        String Name = rst.getString(2);
                        String QTY = rst.getString(3);
                        String Price = rst.getString(4);

                        objectBuilder.add("name", Name);
                        objectBuilder.add("qty", QTY);
                        objectBuilder.add("price", Price);
                        arrayBuilder.add(objectBuilder.build());
                    }
                    dataMsgBuilder.add("data", arrayBuilder.build());
                    dataMsgBuilder.add("massage", "Done");
                    dataMsgBuilder.add("status", 200);
                    writer.print(dataMsgBuilder.build());
                    break;
            }
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
            }
        }
    }
