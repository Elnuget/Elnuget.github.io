let url = 'https://general-2e89b-default-rtdb.firebaseio.com/index.json';
        let contador = 0;
        let contador1 = 0;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            contador = data.contador;
            contador1 = data.contador1;
            document.getElementById('contador').innerHTML = contador;
            document.getElementById('contador1').innerHTML = contador1;
            aumentar(); // Llama a la función para incrementar el contador en 1
        })
        .catch(error => console.error(error));

        function aumentar() {
        contador++;
        document.getElementById('contador').innerHTML = contador;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ contador: contador, contador1: contador1 })
        })
            .then(response => console.log(response))
            .catch(error => console.error(error));
        }

        document.getElementById("button1").addEventListener("click", function() {
            window.location.href = "https://angulocarlos.com/Resume/";
        });

        document.getElementById("button2").addEventListener("click", function() {
            window.location.href = "https://angulocarlos.com/agenda/";
        });

        document.getElementById("button3").addEventListener("click", function() {
            window.location.href = "https://angulocarlos.com/Exoplanetas/";
        });

        document.getElementById("button4").addEventListener("click", function() {
            window.location.href = "https://roadtrt.com/";
        });

        function openModal() {
            // Ocultar los botones al abrir el modal
            var buttons = document.getElementsByClassName("floating-buttons")[0];
            buttons.style.display = "none";
        
            // Mostrar el modal
            document.getElementById("myModal").style.display = "block";
        }
        
        function closeModal() {
            // Mostrar los botones al cerrar el modal
            var buttons = document.getElementsByClassName("floating-buttons")[0];
            buttons.style.display = "flex";
        
            // Cerrar el modal
            document.getElementById("myModal").style.display = "none";
        }
        