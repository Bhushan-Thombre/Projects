module com.game.connectfour.connect4 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.game.connectfour.connect4 to javafx.fxml;
    exports com.game.connectfour.connect4;
}