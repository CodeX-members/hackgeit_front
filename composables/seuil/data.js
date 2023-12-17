import { io } from "socket.io-client";

const socket = io('http://localhost:3005');

socket.on("connect", () => {
    console.log("Front connected")
    socket.emit("checkSeuil");
  });
  
export function getSeuil() {
    const seuilData = ref(null);
    const isLoading = ref(false);
    const error = ref(null);
    const fetchDeviceStatus = () => {
        isLoading.value = true;
        try {
            
            // const response = await fetch(``);
            // seuilData.value = await response.json();
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }

    };

    onMounted(fetchDeviceStatus);

    return { seuilData, isLoading, error };
}
socket.on('sendData', (count) =>{
})