$(document).ready(function() {
    const charPools = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers: "0123456789",
        special: "!@#$%^&*"
    };

    // Seleção de elementos com jQuery
    const $form = $('#generator-form');
    const $passwordText = $('#password-text');
    const $lenInput = $('#password-len');
    const $lenValue = $('#len-value');
    const $bruteForceResult = $('#brute-force-result');

    // Atualiza o valor do tamanho em tempo real
    $lenInput.on('input', function() {
        $lenValue.text($(this).val());
    });

    // Função de Geração de Senha (Lógica preservada)
    function generatePassword(length, opts) {
        let pool = "";
        let password = [];

        if (opts.lower) { pool += charPools.lower; password.push(charPools.lower[Math.floor(Math.random() * charPools.lower.length)]); }
        if (opts.upper) { pool += charPools.upper; password.push(charPools.upper[Math.floor(Math.random() * charPools.upper.length)]); }
        if (opts.numbers) { pool += charPools.numbers; password.push(charPools.numbers[Math.floor(Math.random() * charPools.numbers.length)]); }
        if (opts.special) { pool += charPools.special; password.push(charPools.special[Math.floor(Math.random() * charPools.special.length)]); }

        if (pool === "") return "Selecione algo!";

        for (let i = password.length; i < length; i++) {
            password.push(pool[Math.floor(Math.random() * pool.length)]);
        }

        // Fisher-Yates Shuffle
        for (let i = password.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [password[i], password[j]] = [password[j], password[i]];
        }

        return password.join('');
    }

    // Estimativa de tempo de quebra
    function estimateCrackTime(length, poolSize) {
        const combinations = Math.pow(poolSize, length);
        const hashesPerSec = 1e9;
        const seconds = combinations / hashesPerSec;

        if (seconds < 1) return "Frações de segundo";
        if (seconds < 3600) return "Alguns minutos";
        if (seconds < 86400) return "Algumas horas";
        if (seconds < 31536000) return "Meses";
        return "Muitos séculos";
    }

    // Evento de submissão do formulário
    $form.on('submit', function(e) {
        e.preventDefault();
        
        const options = {
            lower: $('#lowercase-input').is(':checked'),
            upper: $('#uppercase-input').is(':checked'),
            numbers: $('#numbers-input').is(':checked'),
            special: $('#symbols-input').is(':checked')
        };

        const length = parseInt($lenInput.val());
        const password = generatePassword(length, options);
        
        $passwordText.text(password);

        let poolSize = 0;
        if (options.lower) poolSize += 26;
        if (options.upper) poolSize += 26;
        if (options.numbers) poolSize += 10;
        if (options.special) poolSize += 8;
        
        $bruteForceResult.text(estimateCrackTime(length, poolSize));
    });

    // Clique para copiar
    $passwordText.parent().on('click', function() {
        const text = $passwordText.text();
        if (text === "Clique em Gerar" || text === "Selecione algo!") return;

        navigator.clipboard.writeText(text).then(() => {
            // Bootstrap ainda precisa do elemento nativo do DOM para o Toast
            const toastEl = $('#copy-toast')[0]; 
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        });
    });
});