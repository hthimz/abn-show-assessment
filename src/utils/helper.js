import { DASHBOARD_CACHE_DURATION_HOURS, constant } from "./constants";

// Set into Local Storage with Timestamp
export const setDashboardDataInLocalStorage = (arr) => {
    let dt = new Date();
    localStorage.setItem(constant.dashboardShowsDataCache, JSON.stringify(arr));
    localStorage.setItem("timestamp", JSON.stringify(dt));
}

// Get From Local Storage
export const getDashboardDataInLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

//To Check if we can Using Cache Storage for Dashboard Movie data
export const useCachedStorageForDashboard = () => {
    let presentDate = new Date()
    let dt1 = new Date(getDashboardDataInLocalStorage("timestamp"));
    let diff = (presentDate.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff)) >= DASHBOARD_CACHE_DURATION_HOURS ? false : true;
}

//Debounce Function for Search 
let timer;
export const debounce = (func, timeout = 300) => {
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}