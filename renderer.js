const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;

const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessage");

sendMessageButton.addEventListener("click", async () => {
  const message = messageInput.value;
  const response = await window.comms.message(message);
  console.log(response);
});
