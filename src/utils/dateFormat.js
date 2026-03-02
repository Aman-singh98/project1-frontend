/**
 * Format date string (YYYY-MM-DD) to "Jan 15, 2024"
 */
export function formatDisplayDate(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthIndex = parseInt(month, 10) - 1;
    return `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;
  }
