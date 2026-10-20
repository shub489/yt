export function getTimeAgo(publishDate) {
    const published = new Date(publishDate);
    const now = new Date();

    const seconds = Math.floor((now - published) / 1000);

    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years >= 1) {
        return `${years} ${years === 1 ? "year" : "years"} ago`;
    }

    if (months >= 1) {
        return `${months} ${months === 1 ? "month" : "months"} ago`;
    }

    if (days >= 1) {
        return `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    if (hours >= 1) {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    if (minutes >= 1) {
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    return "Just now";

}

export function formatDuration(duration) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    if (!match) return "0:00";

    const hours = Number(match[1] || 0);
    const minutes = Number(match[2] || 0);
    const seconds = Number(match[3] || 0);

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return `${minutes}:${String(seconds).padStart(2, "0")}`;

}

// how to export?