document.addEventListener('DOMContentLoaded', () => {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const messageDisplay = document.getElementById('message');

    submitButton.addEventListener('click', () => {
        const palpite = guessInput.value;

        // Limpa a mensagem anterior
        messageDisplay.textContent = '';

        try {
            const palpiteNumero = parseInt(palpite, 10);

            // Verifica se a entrada é um número
            if (isNaN(palpiteNumero)) {
                throw new Error("Apenas números são aceitos.");
            }

            // Verifica se o palpite está dentro do intervalo
            if (palpiteNumero < 1 || palpiteNumero > 10) {
                messageDisplay.textContent = "Por favor, escolha um número entre 1 e 10.";
                return;
            }

            // Verifica se o palpite está correto
            if (palpiteNumero === numeroSecreto) {
                messageDisplay.textContent = "Parabéns! Você acertou o número!";
            } else if (palpiteNumero < numeroSecreto) {
                messageDisplay.textContent = "O número escolhido é maior que o seu palpite.";
            } else {
                messageDisplay.textContent = "O número escolhido é menor que o seu palpite.";
            }

        } catch (error) {
            messageDisplay.textContent = error.message;
        }

        // Limpa o campo de entrada
        guessInput.value = '';
    });
});
