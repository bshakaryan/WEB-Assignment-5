function updateDateTime() {
    const now = new Date();

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const formattedDate = now.toLocaleString('en-US', options);

    document.getElementById('datetime').textContent = formattedDate;
}

updateDateTime();

setInterval(updateDateTime, 1000);