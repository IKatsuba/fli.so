// This function converts a given expiration date string in the format "Nov 14, 2024 at 3:30 PM"
// to a standardized ISO 8601 date string in the format "YYYY-MM-DDTHH:mm:ss.sssZ".
// The time is adjusted to 12:00:00.000 UTC on the same day.
// Input: "Nov 14, 2024 at 3:30 PM"
function convertExpirationToDate(expiration: string): string {
  const date = new Date(Date.parse(expiration.replace(" at ", " ")));
  // Adjust the date to the desired output
  const utcNoonDate = new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      12,
      0,
      0,
    ),
  );
  return utcNoonDate.toISOString();
}

export { convertExpirationToDate };
