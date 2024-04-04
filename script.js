document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
  
    // Function to handle the dropped video file
    function handleDrop(e) {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      const fileURL = URL.createObjectURL(file);
      video.src = fileURL;
    }
  
    // Prevent default behavior of dropping files
    document.addEventListener("dragover", function(e) {
      e.preventDefault();
    });
  
    // Handle dropped files
    document.addEventListener("drop", handleDrop);
  
    // Handle the change event of the file input
    document.getElementById("fileInput").addEventListener("change", function(e) {
      const file = e.target.files[0];
      const fileURL = URL.createObjectURL(file);
      video.src = fileURL;
    });
  });
// script.js

//document.addEventListener("DOMContentLoaded", function() {
//    const video = document.getElementById("video");
//  
//    // Check if a video source is provided
//    if (video.src) {
      // Remove the default message
//      video.querySelector("p").remove();
//    }
//  });
    