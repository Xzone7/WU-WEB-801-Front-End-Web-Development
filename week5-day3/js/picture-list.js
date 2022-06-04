/* Function to create image list */
const createImageList = () => {
  var photos = []; //Declare an empty array to stroe image element
  var fileName = []; //Declare an empty element to store image file names
  var imageList = []; //Declare an empty array to store html list that contain an image
  var image; //Declare an empty variable to store the assembled image list codes
  var openList = "<li "; //Declare a variable to contain open list tag
  var closeList = "</li>"; //Declare a variable to contain close list tag
  var openCaption = "<figcaption class='caption'>";
  var closeCaption = "</figcaption>";
  var imageCaption = [
    "Nikki",
    "Tessa",
    "Ringo",
    "Zola",
    "Dixie",
    "Rosarita",
    "Mittens",
    "Simba",
    "Elizabeth Taylor",
    "Betty",
    "Dundun",
    "Kiki",
  ];
  var openDescTag = "<div class='description'><span>";
  var closeDescTag = "</span></div>";
  var imageDescription = [
    "female, Senior, Beverly Hills, CA",
    "female, Adult, Beverly Hills, CA",
    "male, Senior, San Jose, CA",
    "female, Young, San Bruno, CA",
    "male, Puppy, Queens, NY",
    "male, Young, San Mateo, CA",
    "female, Senior, Burlingame, CA",
    "male, Adult, Mountain View, CA",
    "male, Adult, SunnyVale, CA",
    "female, Young, Palo Alto, CA",
    "male, Puppy, Fremont, CA",
    "female, Adult, San Francisco, CA",
  ];

  //Create a loop to create 12 images starting with index of 0
  for (var i = 0; i < 12; i++) {
    fileName.push("pet-" + (i + 1)); //Create image file name and store in the array
    photos.push("<img src='images/" + fileName[i] + ".jpeg' alt=" + imageCaption[i] + ">"); //Assemble file name into image element and store in an array
    image =
      openList +
      `id="photo${i + 1}">` +
      photos[i] +
      openCaption +
      imageCaption[i] +
      closeCaption +
      openDescTag +
      imageDescription[i] +
      closeDescTag +
      closeList; //Assemble image element from array with list elements and store in variable
    imageList.push(image); //Store(push) the assembled list codes into an array
  }

  //Display all six image codes stored in the array
  document.getElementById("album").innerHTML = imageList.join("");
};

/* Function to set box click event listener */
const setInfoModal = () => {
  const descriptionBox = document.querySelectorAll(".description");
  if (descriptionBox.length > 0) {
    descriptionBox.forEach((element) => {
      element.addEventListener("click", (event) => {
        // get current click image data
        const imageDescription = event.currentTarget.textContent;
        const imageCaption = event.currentTarget.previousSibling.innerHTML;

        // insert to html
        document.getElementById("modal-heading").innerHTML = imageCaption;
        document.getElementById("modal-content").innerHTML = imageDescription;

        // set modal visibility
        document.getElementById("modal-wrapper").style.display = "block";
      });
    });
  }
};

/* Function to close modal event listener */
const closeModal = () => {
  const modalButton = document.getElementById("modal-button");
  modalButton.addEventListener("click", () => {
    document.getElementById("modal-wrapper").style.display = "none";
  });
};

/* Function to add modal out side click event listener */
const outSideClicker = (id) => {
  const modalWrapper = document.getElementById(id);
  modalWrapper.addEventListener("click", (event) => {
    const clickedTargetElement = event.target;
    if (clickedTargetElement.id === id) {
      document.getElementById(id).style.display = "none";
    }
  });
};

createImageList();
setInfoModal();
outSideClicker("modal-wrapper");
closeModal();

/* Jquery Practice */
$(document).ready(() => {
  $("#album img").click((event) => {
    $("#backdrop")
      .animate({ opacity: ".50" }, 300, "linear")
      .css("display", "block");
    $("#box").fadeIn();

    // Clear up
    if ($("#box").contents("img")) {
      $("#box").contents().remove("img"); 
    }

    $("#box").append(event.target.cloneNode());
  });

  $('#close, #backdrop').click(function(){
    $('#backdrop').animate({'opacity':'0'}, 300, 'linear', () => {
        $('#backdrop').css('display', 'none');
    });
    $('#box').fadeOut();
});
});
