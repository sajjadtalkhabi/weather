import "willatoast/dist/main.css";
import willaToast from "willatoast";

const toast = {
    error: (message, title = "Error") => {
        return willaToast.normal({
            title: title,
            titleColor: "#d9534f",
            message: message,
            position: "bottomCenter"
        });
    },
    success: (message, title = "Success") => {
        return willaToast.normal({
            title: title,
            message: message,
            position: "bottomCenter",
            titleColor: "#5cb85c"
        });
    },
};

export default toast;