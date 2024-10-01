// Example static data (you can fetch real data from an API)
const prayerTimes = {
    daily: {
        fajr: "05:30 AM",
        dhuhr: "12:15 PM",
        asr: "03:45 PM",
        maghrib: "06:15 PM",
        isha: "07:45 PM"
    },
    monthly: [
        { date: "Oct 1", fajr: "05:30 AM", dhuhr: "12:15 PM", asr: "03:45 PM", maghrib: "06:15 PM", isha: "07:45 PM" },
        { date: "Oct 2", fajr: "05:31 AM", dhuhr: "12:16 PM", asr: "03:46 PM", maghrib: "06:16 PM", isha: "07:46 PM" },
        // Add more dates...
    ]
};

// Function to render daily prayer times
function renderDailyPrayerTimes() {
    const dailyTableBody = document.querySelector("#daily-table tbody");
    const prayers = Object.keys(prayerTimes.daily);
    
    prayers.forEach(prayer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${capitalizeFirstLetter(prayer)}</td>
            <td>${prayerTimes.daily[prayer]}</td>
        `;
        dailyTableBody.appendChild(row);
    });
}

// Function to render monthly prayer times
function renderMonthlyPrayerTimes() {
    const monthlyTableBody = document.querySelector("#monthly-table tbody");

    prayerTimes.monthly.forEach(day => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${day.date}</td>
            <td>${day.fajr}</td>
            <td>${day.dhuhr}</td>
            <td>${day.asr}</td>
            <td>${day.maghrib}</td>
            <td>${day.isha}</td>
        `;
        monthlyTableBody.appendChild(row);
    });
}

// Utility function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initialize the app by rendering both tables
renderDailyPrayerTimes();
renderMonthlyPrayerTimes();
