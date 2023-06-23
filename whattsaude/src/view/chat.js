function envio() {
    console.log("ENVIO")
    const chatBox = document.querySelector(".chat-box");
    const mensagem = document.getElementById("envio").value;
    const newMessage = `
      <div class="chat-r">
        <div class="sp"></div>
        <div class="mess mess-r">
          <p>
            ${mensagem}           
          </p>
          <div class="check">
            <span>4:00 PM</span> 
          </div>
        </div>
      </div>
    `;
    chatBox.insertAdjacentHTML("beforeend", newMessage);
  }