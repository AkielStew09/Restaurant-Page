export const renderMenu = ()=>{
    //retrieve and clear the content
    content = document.querySelector("#content");
    content.innerHTML = "";

    //make, style and append hero to content
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("menuHero");
    content.appendChild(titleContainer);

    const titleBox = document.createElement("div");
    titleBox.classList.add("menuTitleBox");
    titleContainer.appendChild(titleBox);

    const title = document.createElement("h2");
    title.textContent = "Our Menu";
    titleBox.appendChild(title);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");
    content.appendChild(menuContainer);

    const menuItems = [
        {
            name:"Jerk Chicken",
            price: 900
        },
        {
            name:"Jerk Pork",
            price: 900
        },
        {
            name:"Curry Goat",
            price: 1200
        },
        {
            name:"BBQ Chicken",
            price: 900
        },
        {
            name:"Oxtail and Beans",
            price: 1300
        }
    ];
    let menuItem;

    menuItems.forEach((item)=>{
        menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        menuContainer.appendChild(menuItem);

        let name = document.createElement("h4");
        name.textContent = item.name;
        menuItem.appendChild(name);

        let priceLabel = document.createElement("p");
        priceLabel.textContent = `Price: $${item.price}.00`;
        menuItem.appendChild(priceLabel);

    })




};