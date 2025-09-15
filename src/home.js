export const renderHome = ()=>{
    //content
    const content = document.querySelector("#content");

    //make, style and append hero to content
    const hero = document.createElement("div");
    hero.classList.add("hero");
    content.appendChild(hero);

    //make, style and append hero-content to hero
    const heroContent = document.createElement("div");
    heroContent.classList.add("hero-content");
    hero.appendChild(heroContent);

    //hero-text to hero-content
    const heroText = document.createElement("div");
    heroText.classList.add("hero-text");
    heroContent.appendChild(heroText);

    //h3 to hero-text
    const heroTextTitle = document.createElement("h3");
    heroTextTitle.textContent = "AK's Hot Spot";
    heroText.appendChild(heroTextTitle);

    //p to hero-text
    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "With the most excellent taste and the most immaculate vibes, nowhere beats the one and only hot spot! Come experience our outstanding customer service, unforgettable live music and premium quality seating. Once you step in you'll never want to leave!";
    heroText.appendChild(heroParagraph);

    //hero-pic to hero-content
    const heroPic = document.createElement("div");
    heroPic.classList.add("hero-pic");
    heroContent.appendChild(heroPic);

    
    //make, style and append qualities-container to content
    const qualitiesContainer = document.createElement("div");
    qualitiesContainer.classList.add("qualities-container");
    content.appendChild(qualitiesContainer);

    //qualities to qualities-container
    const qualities = document.createElement("div");
    qualities.classList.add("qualities");
    qualitiesContainer.appendChild(qualities);

    //first qBox to qualities
    let qBox = document.createElement("div");
    qBox.classList.add("qBox");
    qualities.appendChild(qBox);

    //h4 to qBox
    let qualTitle = document.createElement("h4");
    qualTitle.textContent = "Outstanding Service";
    qBox.appendChild(qualTitle);

    //p to qBox
    let qualParagraph = document.createElement("p");
    qualParagraph.textContent = "We have top level waitors who can fulfill your order with excellent patience and capability. Friendliness and understanding are part of our identity!";
    qBox.appendChild(qualParagraph);




};