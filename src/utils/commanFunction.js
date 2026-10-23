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

const names = [
    "Rahul", "Amit", "Priya", "Sneha", "Vikash",
    "Ankit", "Neha", "Rohit", "Pooja", "Shubham",
    "Aryan", "Karan", "Simran", "Aditya", "Riya"
];

const messages = [
    "Hello everyone! 👋",
    "Amazing video 🔥",
    "Love this stream ❤️",
    "Who is watching from India? 🇮🇳",
    "First time here!",
    "This is awesome 😂",
    "Keep it up!",
    "Great explanation 👍",
    "Let's goooo 🔥🔥",
    "Anyone watching in 2026?",
    "Superb content!",
    "I learned something new today.",
    "Bro, this is next level 🚀",
    "Haha 😂😂",
    "Nice work!"
];

export function generateRandomChat() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return { name: randomName, message: randomMessage };
}