
func largestAltitude(gain []int) int {
    altitude := 0        // පටන් ගන්නා උස
    maxAltitude := 0     // වැඩිම උස track කරන්න

    for _, g := range gain {
        altitude += g                  // නව උස ගන්න
        if altitude > maxAltitude {    // වැඩිම උස update කරන්න
            maxAltitude = altitude
        }
    }

    return maxAltitude
}
