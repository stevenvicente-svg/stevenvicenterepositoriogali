function cotizarTKU() {

  // Precio base de la cotización (en quetzales)
  var precio_base = 2000

  // Valores de recargos por edad (asegurado)
  var edad_18 = 0.1 // 10%
  var edad_25 = 0.2 // 20%
  var edad_50 = 0.3 // 30%

  // Valores de recargos por edad (cónyuge)
  var casado_18 = 0.1 // 10%
  var casado_25 = 0.2 // 20%
  var casado_50 = 0.3 // 30%

  // Recargo por hijos
  var hijos_recargo = 0.2 // 20%


  var recargo = 0
  var recargo_total = 0
  var precio_final = 0

  
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuántos años tiene? Ingrese solamente números")

  var edad_numero = parseInt(edad)

  if (isNaN(edad_numero)) {
    alert("Edad inválida. Debe ingresar un número.")
    return
  }

  if (edad_numero < 18) {
    alert("No se puede cotizar: el asegurado debe ser mayor de edad (18+).")
    return
  }

 
  var casado = prompt("¿Está casado actualmente? (si/no)")
  casado = (casado || "").trim().toUpperCase()

  // Edad del cónyuge (solo si está casado)
  var edad_conyuge_numero = 0
  if ("SI" === casado) {
    var edad_conyuge = prompt("¿Qué edad tiene su esposo/a? Ingrese solamente números")
    edad_conyuge_numero = parseInt(edad_conyuge)

    if (isNaN(edad_conyuge_numero)) {
      alert("Edad del cónyuge inválida. Debe ingresar un número.")
      return
    }
  }

  var hijos = prompt("¿Tiene hijos o hijas? (si/no)")
  hijos = (hijos || "").trim().toUpperCase()

  // Cantidad de hijos (solo si tiene)
  var cantidad_hijos = 0
  if ("SI" === hijos) {
    cantidad_hijos = parseInt(prompt("¿Cuántos hijos o hijas tiene? Ingrese solamente números"))

    if (isNaN(cantidad_hijos) || cantidad_hijos < 0) {
      alert("Cantidad de hijos inválida. Debe ingresar un número entero mayor o igual a 0.")
      return
    }
  }

  if (edad_numero >= 18 && edad_numero < 25) {
    recargo = precio_base * edad_18
    recargo_total = recargo_total + recargo
  } else if (edad_numero >= 25 && edad_numero < 50) {
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
  } else if (edad_numero >= 50) {
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
  }


  if ("SI" === casado) {
    if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
      recargo = precio_base * casado_18
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
      recargo = precio_base * casado_25
      recargo_total = recargo_total + recargo
    } else if (edad_conyuge_numero >= 50) {
      recargo = precio_base * casado_50
      recargo_total = recargo_total + recargo
    }
  }

  if (cantidad_hijos > 0) {
    recargo = precio_base * hijos_recargo * cantidad_hijos
    recargo_total = recargo_total + recargo
  }

  precio_final = precio_base + recargo_total

  alert("Para el asegurado: " + nombre)
  alert("El recargo total será de: Q " + recargo_total)
  alert("El precio final será de: Q " + precio_final)
}

