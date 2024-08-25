    const textArea = document.querySelector(".decodificador__text-area");
    const mensagem = document.querySelector(".decodificador__mensagem");
    const copiarButton = document.querySelector('#btn-copiar');
    const mensagemResultado = document.querySelector("#texto-resultado");
    const mensagemSemResultados = document.querySelector("#sem-resultados")
  

    function verificarTexto() {
        if (textArea.value.trim() !== '') {
            // Se o campo de texto não estiver vazio
            mensagemSemResultados.style.display = 'none'; // Oculta o elemento A
            mensagemResultado.style.display = 'flex'; // Mostra o elemento B
        } else {
            // Se o campo de texto estiver vazio
            mensagemSemResultados.style.display = 'flex'; // Mostra o elemento A
            mensagemResultado.style.display = 'none'; // Oculta o elemento B
        }
    }


    copiarButton.addEventListener('click', async () => {
        try {
            // Copie o texto para a caixa mágica
            await navigator.clipboard.writeText(mensagem.value);
            mensagem.value = "";
            verificarTexto(textArea)
            alert('Texto copiado para a área de transferência!');
        } catch (err) {
            alert('Falha ao copiar o texto: ' + err);
        }
        
    });

    function btnCriptografar() {
        const textoCriptografado = criptografar(textArea.value);
        mensagem.value = textoCriptografado;
        textArea.value = "";
    }
    
    function criptografar(textoCriptografado) {
        let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textoCriptografado = textoCriptografado.toLowerCase();
    
        for(let i = 0; i < matrizCodigo.length; i++) {
            if(textoCriptografado.includes(matrizCodigo[i][0])) {
                textoCriptografado = textoCriptografado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
    
        return textoCriptografado;
    }
    
    function btnDescriptografar() {
        const textoDescriptografado = descriptografar(textArea.value);
        mensagem.value = textoDescriptografado;
        textArea.value = "";
    }
    
    function descriptografar(textoDescriptografado) {
        let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textoDescriptografado = textoDescriptografado.toLowerCase();
    
        for(let i = 0; i < matrizCodigo.length; i++) {
            if(textoDescriptografado.includes(matrizCodigo[i][1])) {
                textoDescriptografado = textoDescriptografado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
    
        return textoDescriptografado;
    }

    textArea.addEventListener('input', verificarTexto);



