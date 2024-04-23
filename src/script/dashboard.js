function validateUser() {
  const token = localStorage.getItem("tokenSphynx");
  const tokenName = localStorage.getItem("nameSphynx");
  const greeting = document.querySelector("h1");
  const hideBody = document.querySelector("section");

  if (!token) {
    alert("Você não está logado");
    hideBody.style.display = "none";
    window.location.href = "login.html";
    return;
  }

  greeting.innerHTML = `Bem-vindo(a), ${tokenName}!`;
}

async function showAgentLIst() {
  const res = await fetch("http://192.168.0.121:5000/chat/agents/1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      user_token: `CHSdSPuekrbnRvE85tPdiVkk`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const sectionTag = document.querySelector("section");

      data.forEach((agent) => {
        const mainTag = document.createElement("main");
        mainTag.classList.add("agent-list");
        sectionTag.appendChild(mainTag);

        const h2Tag = document.createElement("h2");
        h2Tag.innerHTML = agent.name;
        mainTag.appendChild(h2Tag);

        const asideTag = document.createElement("aside");
        mainTag.appendChild(asideTag);

        const profileImage = document.createElement("img");
        profileImage.src = "../images/profilePicture.svg"
        asideTag.appendChild(profileImage);

        const ulTag = document.createElement("ul");
        asideTag.appendChild(ulTag);

        
        const properties = ["id", "email", "role", "confirmed", "auto_offline"];
        properties.forEach((property) => {
          const liTag = document.createElement("li");
          const pTag = document.createElement("p");
          const editImage = document.createElement("img");
          editImage.src = "../images/editIcon.svg"
          liTag.innerHTML = `${property}:`;
          pTag.innerHTML = agent[property];
          liTag.appendChild(pTag);
          ulTag.appendChild(liTag);
          if(property === "role" || property === "email" || property === "auto_offline") {
            liTag.appendChild(editImage);
          }
        });

        const buttonTag = document.createElement("button");
        const imageTag = document.createElement("img");
        imageTag.src = "../images/trash.svg";
        buttonTag.innerHTML = "Deletar Agente";
        asideTag.appendChild(buttonTag);
        buttonTag.appendChild(imageTag);
      });
      console.log(data);
    })
    .catch((err) => console.error(err));
}

window.addEventListener("load", showAgentLIst);
window.addEventListener("load", validateUser);
