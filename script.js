// script.js
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    // Simple validation
    if (title && content) {
        const noteItem = document.createElement('li');
        noteItem.textContent = `Title: ${title} - Content: ${content}`;
        document.getElementById('notes-list').appendChild(noteItem);

        // Reset form
        document.getElementById('upload-form').reset();
    } else {
        alert('Please fill in both the title and content fields.');
    }
});
