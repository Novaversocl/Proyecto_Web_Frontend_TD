const REGEX_NOMBRES = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/;
const REGEX_MONTOBRUTOANUAL = /^\d+$/;
const REGEX_DEDUCCIONES = /^\d+$/;

export const validarTexto = (texto) => {
  if (!REGEX_NOMBRES.test(texto)) {
    return false;
  } else {
    return true;
  }
};

export const validarMontoBrutoAnual = (montoBrutoAnual) => {
  if (!REGEX_MONTOBRUTOANUAL.test(montoBrutoAnual)) {
    return false;
  } else {
    return true;
  }
};

export const validarDeducciones = (deducciones) => {
  if (!REGEX_DEDUCCIONES.test(deducciones)) {
    return false;
  } else {
    return true;
  }
};