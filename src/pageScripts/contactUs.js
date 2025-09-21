export const renderContactUs = () =>{
    //retrieve and clear the content
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    content.appendChild(contactContainer);

    const cBox = document.createElement("div");
    cBox.classList.add("contactBox");
    contactContainer.appendChild(cBox);

    const cTitle = document.createElement("h2");
    cTitle.textContent = "Contact Us";
    const cInfo = document.createElement("p");
    cInfo.innerHTML = "Phone: (876)393-5091<br/><br/>Email: akHotSpot33@gmail.com";
    cBox.appendChild(cTitle);
    cBox.appendChild(cInfo);
};