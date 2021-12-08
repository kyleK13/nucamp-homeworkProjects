function showPattern() {
    const colorsArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length);
        const newDiv = document.createElement("div");           //creates new div element with given values

        newDiv.style.top = topPosition + "px";                  //units (px) are required by the css property
        newDiv.style.left = leftPosition + "px";
        newDiv.style.width = width + "px";
        newDiv.style.height = height + "px";
        newDiv.style.background = colorsArr[randomColorIdx];

        document.body.appendChild(newDiv);                      //this will attach it to the DOM so it shows on the page. this creates first and largest square
        topPosition += 10;                                      //this will move the div
        leftPosition += 10;                                     //this will move the div
        width -= 20;                                            //values change to create a new smaller square
        height -= 20;                                           //values change to create a new smaller square, then create new div at top of loop (line 11)
    }

}