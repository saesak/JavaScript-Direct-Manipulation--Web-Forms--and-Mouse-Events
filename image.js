const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const text = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */

for(let i = 0; i < arr.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "/images/" + arr[i]);
    newImage.setAttribute('alt', text[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", (event) => {
        displayedImage.setAttribute('src', event.target.src);
        displayedImage.setAttribute('alt', event.target.alt);
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", (event) =>{
    let className = btn.getAttribute("class");
    if (className === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})