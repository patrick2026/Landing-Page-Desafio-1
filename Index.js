
function clickNobotao() {
   
    let inputNomeValue = document.getElementById("inputNome").value;
    let inputEmailValue = document.getElementById("inputEmail").value;

    
    if (inputNomeValue.trim() === '' || inputEmailValue.trim() === '') {
        alert('Por favor, preencha todos os campos do formulário.');
        return; 
    }

    
    let currentDate = new Date();
    let anoAtual = currentDate.getFullYear();
    
    
    let horaAtual = ('0' + currentDate.getHours()).slice(-2);
    let minutosAtuais = ('0' + currentDate.getMinutes()).slice(-2);
    let segundosAtuais = ('0' + currentDate.getSeconds()).slice(-2);

    
    let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let diaDaSemanaAtual = diasDaSemana[currentDate.getDay()];

    
    document.getElementById("inputNome").value = "";
    document.getElementById("inputEmail").value = "";

    
    let formData = new FormData();
    formData.append("Name", inputNomeValue);
    formData.append("Email", inputEmailValue);
    formData.append("Hora", horaAtual + ":" + minutosAtuais + ":" + segundosAtuais);
    formData.append("DiaDaSemana", diaDaSemanaAtual);
    formData.append("Ano", anoAtual);

    
    fetch("https://api.sheetmonkey.io/form/tEQNtQkhKhVbeacJpx1yL3", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao enviar dados para o Sheet Monkey");
        }
        
        let newPageUrl = "https://archtrends.com/referencias/apartamentos";
        window.open(newPageUrl, '_blank');
    })
    .catch(error => {
        console.error(error);
      
    });
}