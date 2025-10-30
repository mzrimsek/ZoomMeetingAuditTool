export {};

declare global {
  interface Window {
    versions: {
      node: () => string;
      chrome: () => string;
      electron: () => string;
    };
    comms: {
      message: (msg: string) => Promise<any>;
    };
  }
}

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;

const messageInput = document.getElementById(
  "messageInput"
) as HTMLInputElement;
const sendMessageButton = document.getElementById(
  "sendMessage"
) as HTMLButtonElement;

sendMessageButton.addEventListener("click", async () => {
  const message = messageInput.value;
  const response = await window.comms.message(message);
  console.log(response);
});
