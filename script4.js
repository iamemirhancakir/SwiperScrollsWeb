$(document).ready(function() {
    $('#contact-btn').click(function() {
        $('#register-form').hide();
        $('#contact-form').fadeIn();
    });

    $('#register-btn').click(function() {
        $('#contact-form').hide();
        $('#register-form').fadeIn();
    });

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
        this.reset();
    });

    $('#register-form').on('submit', function(e) {
        e.preventDefault();
        alert('Kayıt başarılı! Hoş geldiniz.');
        this.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById('password');
    const message = document.getElementById('message');
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const number = document.getElementById('number');
    const special = document.getElementById('special');

    passwordInput.onkeyup = function() {
        const passwordValue = passwordInput.value;

        // Uzunluk kontrolü
        if (passwordValue.length >= 8) {
            length.classList.remove('invalid');
            length.classList.add('valid');
        } else {
            length.classList.remove('valid');
            length.classList.add('invalid');
        }

        // Büyük harf kontrolü
        if (/[A-Z]/.test(passwordValue)) {
            uppercase.classList.remove('invalid');
            uppercase.classList.add('valid');
        } else {
            uppercase.classList.remove('valid');
            uppercase.classList.add('invalid');
        }

        // Küçük harf kontrolü
        if (/[a-z]/.test(passwordValue)) {
            lowercase.classList.remove('invalid');
            lowercase.classList.add('valid');
        } else {
            lowercase.classList.remove('valid');
            lowercase.classList.add('invalid');
        }

        // Rakam kontrolü
        if (/\d/.test(passwordValue)) {
            number.classList.remove('invalid');
            number.classList.add('valid');
        } else {
            number.classList.remove('valid');
            number.classList.add('invalid');
        }

        // Özel karakter kontrolü
        if (/[!@#$%^&*]/.test(passwordValue)) {
            special.classList.remove('invalid');
            special.classList.add('valid');
        } else {
            special.classList.remove('valid');
            special.classList.add('invalid');
        }
    };
});

