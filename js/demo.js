const logBtn = document.querySelector('.log-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

// Open popup
logBtn.addEventListener('click', () => {
  popup.classList.add('active');
});

// Close popup ONLY with close button
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

  // hrline activated
$(document).ready(function() {
  $('.popup-box-subsec-4a input[type="radio"]').on('change', function() {
    // Get the index of selected mood relative to all .popup-box-subsec-4a inside the same parent
    const index = $(this).closest('.popup-box-subsec-4a').index();

    // Reset all HRs
    $('.popup-box-subsec-5 .mood-hr').css('border-top', '3px solid #c5d3f8');

    // Activate corresponding HR
    $('.popup-box-subsec-5 .mood-hr').eq(index).css('border-top', '2px solid #4b65dc');
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById('popup');
  const continueBtn = document.getElementById('log-clik');
  const logMoodBtn = document.querySelector('.log-btn:not(#log-clik)');
  const hiddenMessage = document.getElementById('hiddenMessage');
  const hiddenMessageimg = document.getElementById('hiddenMessagimg');
  const moodText = document.getElementById('moodText');
  const moodImage = document.getElementById('moodImage');

  const moodData = {
    "very-happy": { text: "Very Happy", img: "assets/images/veryhappy-big.png" },
    "happy": { text: "Happy", img: "assets/images/happy-big.png" },
    "sad": { text: "Sad", img: "assets/images/sad-big.png" },
    "neutral": { text: "Neutral", img: "assets/images/neutral-big.png" },
    "very-sad": { text: "Very Sad", img: "assets/images/verysad-big.png" }
  };

  if (logMoodBtn) {
    logMoodBtn.addEventListener('click', () => {
      popup.classList.add('active');
    });
  }

  continueBtn.addEventListener('click', () => {
    const selectedMood = document.querySelector('input[name="mood"]:checked');
    if (!selectedMood) {
      alert("Please select a mood before continuing!");
      return;
    }

    const { text, img } = moodData[selectedMood.value];
    moodText.textContent = text;
    moodImage.src = img;

    hiddenMessage.style.display = "block";
    if (logMoodBtn) logMoodBtn.style.display = "none";
    popup.classList.remove('active');
    
    hiddenMessageimg.style.display = "block";
    if (logMoodBtn) logMoodBtn.style.display = "none";
    popup.classList.remove('active');
  });
});



