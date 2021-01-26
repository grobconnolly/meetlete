const scriptURL =
  "https://script.google.com/macros/s/AKfycbwCLz9KziBKDkPnAn9mlJLzkH9pF-oy0b-nhp3VTLW1-_d92fqu5_jpkQ/exec";

const fanForm = document.forms["fan-contact-form"];

if (fanForm) {
  fanForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(fanForm);
    formData.append("type", "fan");
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  });
}
const contestForm = document.forms["contest-contact-form"];

if (contestForm) {
  contestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contestForm);
    formData.append("type", "contest");
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  });
}

const talentForm = document.forms["talent-contact-form"];

if (talentForm) {
  talentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(talentForm);
    formData.append("type", "talent");
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
  });
}
