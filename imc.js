peso = prompt('Digite seu peso (Insira ponto no lugar da vírgula)')
altura = prompt('Digite sua altura (Insira ponto no lugar da vírgula')
imc = peso/(altura*altura)

document.write("Seu IMC é: " + imc + "<br>")

if(imc <= 17){document.write("Você está muito abaixo do peso")}
if(imc > 17 && imc <= 18.49){document.write("Você está abaixo do peso")}
if(imc >= 18.5 && imc <= 24.99){document.write(" Você está no peso normal")}
if(imc >= 25 && imc <= 29.99){document.write("Você está acima do peso")}
if(imc >= 30 && imc <= 34.99){document.write("Você está com Obesidade I")}
if(imc >= 35 && imc <= 39.99){document.write("Você está com Obesidade II")}