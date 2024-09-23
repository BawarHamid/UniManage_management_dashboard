export function formatChargingTime(seconds: number) {
    const hours = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${remainingSeconds}`;
}

// export function formatChargingTime(seconds: number) {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hrs}h ${mins}m ${secs}s`;
// }
