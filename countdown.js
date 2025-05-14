document.addEventListener("DOMContentLoaded", function() {
    const diasSpan = document.querySelector(".cuenta-regresiva span:nth-child(1) strong");
    const horasSpan = document.querySelector(".cuenta-regresiva span:nth-child(2) strong");
    const minutosSpan = document.querySelector(".cuenta-regresiva span:nth-child(3) strong");
  
    function actualizarCuentaRegresiva() {
      const fechaEvento = new Date("September 19, 2025 00:00:00").getTime();
      const ahora = new Date().getTime();
      const diferencia = fechaEvento - ahora;
  
      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  
        diasSpan.textContent = dias;
        horasSpan.textContent = horas < 10 ? "0" + horas : horas;
        minutosSpan.textContent = minutos < 10 ? "0" + minutos : minutos;
      } else {
        diasSpan.textContent = "0";
        horasSpan.textContent = "00";
        minutosSpan.textContent = "00";
      }
    }
  
    actualizarCuentaRegresiva();
    setInterval(actualizarCuentaRegresiva, 60000);
  });
  