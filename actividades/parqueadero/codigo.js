function calcularPago() {

    let tipo = document.getElementById("tipo").value;
    let placa = document.getElementById("placa").value;
    let ingreso = document.getElementById("ingreso").value;
    let salida = document.getElementById("salida").value;
    let dinero = Number(document.getElementById("pagoCliente").value);

    if (placa === "") {
        alert("Ingrese la placa");
        return;
    }

    if (ingreso === "" || salida === "") {
        alert("Ingrese las fechas");
        return;
    }

    let fechaIngreso = new Date(ingreso);
    let fechaSalida = new Date(salida);

    if (fechaSalida <= fechaIngreso) {
        alert("La salida debe ser mayor que el ingreso");
        return;
    }

    let minutos = Math.ceil((fechaSalida - fechaIngreso) / 60000);

    let tarifa;

    if (tipo === "Automóvil") {
        tarifa = 125;
    } else {
        tarifa = 95;
    }

    let valor = minutos * tarifa;

    valor = Math.ceil(valor / 50) * 50;

    if (dinero < valor) {
        alert("Dinero insuficiente");
        return;
    }

    let cambio = dinero - valor;

    let resultado = `
        <h3>Resultado</h3>
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Placa:</strong> ${placa}</p>
        <p><strong>Tiempo:</strong> ${(minutos / 60).toFixed(2)} horas</p>
        <p><strong>Valor a pagar:</strong> $${valor}</p>
        <p><strong>Dinero entregado:</strong> $${dinero}</p>
        <p><strong>Cambio:</strong> $${cambio}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}