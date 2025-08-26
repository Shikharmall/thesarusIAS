import AsyncStorage from "@react-native-async-storage/async-storage";

// Save data
export const saveData = async () => {
    try {
        await AsyncStorage.setItem("userToken", "abc123");
        console.log("Data saved!");
    } catch (e) {
        console.error("Error saving data", e);
    }
};

// Get data
export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem("userToken");
        if (value !== null) {
            console.log("Stored token:", value);
        }
    } catch (e) {
        console.error("Error reading data", e);
    }
};

// Remove data
export const removeData = async () => {
    try {
        await AsyncStorage.removeItem("userToken");
        console.log("Data removed!");
    } catch (e) {
        console.error("Error removing data", e);
    }
};

// Clear all storage

export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        console.log("All data cleared!");
    } catch (e) {
        console.error("Error clearing AsyncStorage", e);
    }
};
