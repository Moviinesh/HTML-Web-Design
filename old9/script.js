function generateStory() {
    document.getElementById('wordForm').style = "visibility: hidden;";
    const adjective1 = document.getElementById('adjective1').value;
    const noun1 = document.getElementById('noun1').value;
    const verb1 = document.getElementById('verb1').value;
    const adverb1 = document.getElementById('adverb1').value;
    const object1 = document.getElementById('object1').value;

    const story = `One ${adjective1} day, a ${adjective1} ${noun1} tried to ${verb1} ${adverb1} with a ${object1}. The ${noun1}s watched in shock. Suddenly, the ${object1} ${verb1}ed. “Why ${verb1} today?” someone yelled ${adverb1}. The ${noun1} just smiled, ${adverb1}.`;
    document.getElementById('storyOutput').innerText = story;
}