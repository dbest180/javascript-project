/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    // Log to verify the function is being called
    console.log("upDate function called");
    
    // Log the alt and src of the preview image
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    
    // Get the element with id "image"
    let imageDiv = document.getElementById('image');
    
    // Change the background image to the preview image's source
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text to the preview image's alt text
    imageDiv.innerHTML = previewPic.alt;
    
    // Remove blur effect from the current image
    previewPic.style.filter = "blur(0px)";
}

function unDo() {
  /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    
    // Log to verify the function is being called
    console.log("unDo function called");
    
    // Get the element with id "image"
    let imageDiv = document.getElementById('image');
    
    // Reset the background image to empty (original from CSS)
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    // Re-apply blur effect to all preview images
    let previewImages = document.getElementsByClassName('preview');
    for (let i = 0; i < previewImages.length; i++) {
        previewImages[i].style.filter = "blur(3px)";
    }
}

function addTabFocus() {
    /* This function adds tabindex attributes to all preview images
       to make them keyboard accessible
    */
    
    // Log to verify the function is being called
    console.log("addTabFocus function called - adding tabindex to images");
    
    // Get all elements with class "preview"
    let previewImages = document.getElementsByClassName('preview');
    
    // Loop through each image and add tabindex attribute and initial blur
    for (let i = 0; i < previewImages.length; i++) {
        previewImages[i].setAttribute('tabindex', '0');
        previewImages[i].style.filter = "blur(3px)";
        previewImages[i].style.transition = "filter 0.3s ease";
        console.log("Added tabindex and blur to image:", previewImages[i].alt);
    }
}
