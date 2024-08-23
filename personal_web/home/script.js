
// Function to update the user's profile photo on page load
function updateProfilePhoto() {
  const profilePhotoElements = document.querySelectorAll('.bg-center.bg-no-repeat.bg-cover');
  const savedImage = localStorage.getItem('profileImage');

  if (savedImage && profilePhotoElements.length > 0) {
      profilePhotoElements.forEach(element => {
          element.style.backgroundImage = `url('${savedImage}')`;
      });
  }
}

// Function to save a new profile photo and update it across all pages
function saveNewProfilePhoto(photoInput) {
  if (photoInput) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const newImageUrl = e.target.result;
          localStorage.setItem('profileImage', newImageUrl);
          updateProfilePhoto();  // Update the photo immediately after saving
      };
      reader.readAsDataURL(photoInput);
  }
}

// Call the function when the page loads to ensure the latest photo is shown
window.onload = function() {
  updateProfilePhoto();
};






var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function animate() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('img').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

animate();

