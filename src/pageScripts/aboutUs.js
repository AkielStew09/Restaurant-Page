export const renderAboutUs = () =>{
    //retrieve and clear the content
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const paragraph = "Welcome to The Hot Spot, where every dish tells a story of flavor, family, and tradition. Our journey began not in a professional kitchen, but in the vibrant backyard of our founder, AK, whose legendary weekend cookouts became the stuff of local legend. Friends and neighbors would flock for a taste of his fiery jerk chicken, slow-braised oxtail that fell off the bone, and perfectly seasoned fried chicken. The demand grew so great that what started as a passionate hobby blossomed into a dream. We opened our doors to bring that same authentic, soul-satisfying Caribbean and Southern comfort food to everyone. Today, we honor those humble beginnings, using only the freshest ingredients, secret family recipes, and cooking everything with the same love that started it all. This is more than a restaurant; it’s our home, and you’re always invited to the table."


    const aHero = document.createElement("div");
    aHero.classList.add("aboutUsHero");
    content.appendChild(aHero);

    const aInfo = document.createElement("div");
    aInfo.classList.add("aboutUsInfo");
    aHero.appendChild(aInfo);

    const aTitle = document.createElement("h1");
    aTitle.textContent = "About Us";
    const aPara = document.createElement("p");
    aPara.textContent = paragraph;

    aInfo.appendChild(aTitle);
    aInfo.appendChild(aPara);



};