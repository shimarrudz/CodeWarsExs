function countPassengers(busStops) {
    let totalPassengers = 0;

    for (const [on, off] of busStops) {
        totalPassengers += on - off;
    }

    return totalPassengers >= 0 ? totalPassengers : 0;
}

const busStops1 = [[10, 0], [3, 5], [5, 8]];
console.log(countPassengers(busStops1)); // Output: 5

const busStops2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 0]];
console.log(countPassengers(busStops2)); // Output: 17