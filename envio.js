//===== Validación de Formulario de Bootstrap =====

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


//Validar con los asteriscos

document.addEventListener('DOMContentLoaded', function() {
  // Función para cambiar el color del asterisco
  function cambiarColorAsterisco(elemento) {
      const asterisco = elemento.parentElement.querySelector('.asterisco');
      asterisco.style.color = 'green'; // Cambia el color a verde
  }

  // Función para verificar si el campo está vacío
  function campoVacio(elemento) {
      return elemento.value.trim() === '';
  }

  // Selecciona todos los campos requeridos
  const camposRequeridos = document.querySelectorAll('input[required], select[required]');

  // Escucha el evento de cambio en cada campo requerido
  camposRequeridos.forEach(function(campo) {
      campo.addEventListener('change', function() {
          if (!campoVacio(campo)) {
              cambiarColorAsterisco(campo);
          } else {
              // Si el campo está vacío, cambia el color del asterisco a rojo
              const asterisco = this.parentElement.querySelector('.asterisco');
              asterisco.style.color = 'red';
          }
      });
  });
});







