module com.example.main {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.main to javafx.fxml;
    exports com.example.main;
}