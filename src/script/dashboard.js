function validateUser() {
  const token = localStorage.getItem("tokenSphynx");
  const tokenName = localStorage.getItem("nameSphynx");
  const greeting = document.querySelector("h1");

  if (!token) {
    alert("Você não está logado");
    window.location.href = "login.html";
    return;
  }

  greeting.innerHTML = `Bem-vindo(a), ${tokenName}!`;
}

async function showAgentLIst() {

const res = await fetch(
    "http://192.168.0.121:5000/chat/agents/2",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "user_token": `s8aDsq7aajiLPrYFLSQb7wQx`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
       /* data.map((agent) => {
            const agentList = document.querySelector(".agent-list");
            const agentItem = document.createElement("li");
            agentItem.innerHTML = `Nome: ${agent.name} - ID: ${agent.id}`;
            agentList.appendChild(agentItem);
        }); */
       // (pre.innerHTML = JSON.stringify(data, null, 2))
        console.log(data);
    })
    .catch((err) => console.error(err));


}

window.addEventListener("load", showAgentLIst);
window.addEventListener("load", validateUser);
