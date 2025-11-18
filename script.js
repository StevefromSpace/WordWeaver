document.addEventListener("DOMContentLoaded", () => {
    loadStoryLibrary();
});

async function loadStoryLibrary() {
    const container = document.getElementById("story-library-container");
    if (!container) { 
        console.error("Error: Could not find #story-library-container on Main.html.");
        return; 
    }
    
    try {
        const response = await fetch("stories.json?" + new Date().getTime()); 
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} (Could not find stories.json)`);
        }
        
        const stories = await response.json();
        
        container.innerHTML = ""; 
        
        stories.forEach(story => {
            const card = document.createElement("div");
            card.className = "story-card"; 
            card.innerHTML = `
                <h3>${story.title}</h3>
                <p>${story.description} (Level: ${story.level})</p>
                <a href="${story.filename}" class="button">Read Story</a>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Could not load story library:", error);
        container.innerHTML = `
            <p style="color: red; font-weight: bold; grid-column: 1 / -1;">
                Error: Could not load stories.
            </p>
            <p style="color: #555; grid-column: 1 / -1;">
                Please make sure the <strong>stories.json</strong> file exists in the main folder and does not have any typos.
            </p>`;
    }
}