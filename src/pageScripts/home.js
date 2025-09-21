export const renderHome = ()=>{
    //retrieve and clear the content
    const content = document.querySelector("#content");
    content.innerHTML = "";

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
    heroParagraph.textContent = "With the most excellent taste and the most impeccable ambience, nowhere beats the one and only hot spot! Come experience our outstanding customer service, unforgettable live music and premium quality seating. Once you step in you'll never want to leave!";
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

    let qBoxes = [
        {
            title: "Outstanding Service",
            par: "We have top level waitors who can fulfill your order with excellent patience and capability. Friendliness and understanding are part of our identity!"
        },
        {
            title: "Comfortable Environment",
            par: "When you feast with us, you can rest assured that your surroundings will be more than up to par. Our home-like design and thought out arrangement surpass many high end restaurants, and are sure to make you feel as cozy and at home as possible."
        },
        {
            title: "Top-Level Food Prep.",
            par: "Our cooks are amazingly gifted, and they put their all into every meal they prepare for you. Our attention to detail in orders, our skills in the kitchen honed throughout the years, and our willingness to go the extra mile leave our visitors in awe every time."
        },
        {
            title: "Reliable Hygiene",
            par: "Here at the Hot Spot, we clean so frequently and thoroughly that we never face related problems or complaints. You can trust in us to keep your surroundings up to par, and to maintain an ambience that pleases all senses."
        }
    ]

    //declare element vars to be defined and appended in the forEach loop

    let qBox, qualTitle, qualParagraph;

    qBoxes.forEach((box)=>{
        //qBox to qualities
        qBox = document.createElement("div");
        qBox.classList.add("qBox");
        qualities.appendChild(qBox);

        //qualTitle to qBox
        qualTitle = document.createElement("h4");
        qualTitle.textContent = box.title;
        qBox.appendChild(qualTitle);

        //qualParagraph to qBox
        qualParagraph = document.createElement("p");
        qualParagraph.textContent = box.par;
        qBox.appendChild(qualParagraph);

    });






};