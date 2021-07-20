let txtNombre = document.getElementById("nombre");
let txtApellido = document.getElementById("apellido");
let txtNroPersonas = document.getElementById("nroPersonas");
let txtNroContacto = document.getElementById("nroContacto");
let txtMail = document.getElementById("mail");

let rbtTransferencia = document.getElementById("transferencia");
let rbtMPago = document.getElementById("mPago");
let rbtVoucher = document.getElementById("voucher");

let dtpFecha = document.getElementById("fecha");
let comboPlan = document.getElementById("plan");
let chbxTerminos = document.getElementById("terminos");

var patron = /^[0-9]+$/;
var expr =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validarEnviar() {
    if (txtNombre.value === "") {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Ingrese Nombre...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (txtApellido.value === "") {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Ingrese Apellido...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (txtNroPersonas.value === "") {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Ingrese Cantidad De Personas...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (txtNroContacto.value === "" || !patron.test(txtNroContacto.value)) {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Ingrese Numero De Contacto Con Numeros...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (txtMail.value === "" || !expr.test(txtMail.value)) {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Ingrese Email En Formato Correcto...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (!rbtTransferencia.checked && !rbtMPago.checked && !rbtVoucher.checked) {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Seleccione Medio De Pago...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (dtpFecha.value === "") {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Ingrese Seleccione Fecha De Ingreso...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (comboPlan.value === "") {
        let timerInterval;
        Swal.fire({
            title: "Porfavor Seleccione Plan...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }

    if (!chbxTerminos.checked) {
        let timerInterval;
        Swal.fire({
            title: "Debe Aceptar Nuestros Terminos...",
            html: "Cerrando en <b></b> milisegundos.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
        return false;
    }
    // --------------------------------------
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El formulario cargo con exito!!",
        showConfirmButton: false,
        timer: 1500,
    });
    // ---------------------------------------
    setTimeout(() => {
        document.getElementById("formsito").submit();
        window.location.replace("./paquetesHabitaciones.html");
    }, 1500);
}

function limpiar() {
    document.getElementById("formsito").reset();
}
