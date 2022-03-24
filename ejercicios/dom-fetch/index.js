/** Manipulando el DOM con fetch()
1. Cree un detector de eventos para el DOM después de que se cargue.
2. Cree una función que ejecutará la función de solicitud de recuperación.
3. Escriba la solicitud de recuperación.
4. Convierta la promesa de búsqueda en JSON.
5. Envíe datos JSON a una función de devolución de llamada .
6. Función de compilación que crea y agrega elementos al DOM.
--eliminando
7. Cree los elementos del botón Eliminar.
8. Agregue un detector de eventos al botón para ejecutar una función de devolución de llamada .
9. Cree la función de devolución de llamada para eliminar la cotización en el backend y el frontend.

    1- document.addEventListener( 'DOMContentLoaded' , ()=>{ //todo el codigo })
    2- función fetchData() {}
    3- función fetchData() { 
        fetch(' https://api.github.com/users/Enrique0305/repos' ) 
        }
    4- función fetchData() { 
        fetch(' https://api.github.com/users/Enrique0305/repos' ) 
        .then( respuesta => respuesta.json() )
        }
    5- función fetchData() { 
        fetch(' https://api.github.com/users/Enrique0305/repos' ) 
        .then( respuesta => respuesta.json() ) 
        .then( datos => alguna_función(datos) )
        }
    6- resultado
 */
const URL='https://api.github.com/users/Enrique0305/repos'
document.addEventListener('DOMContentLoaded', ()=>{
    function fetchData() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => renderProject(data))
      }
      function renderProject(data) {
          for (const q of data) {
        //Encontrar el contenedor donde adjuntamos todo
            const quoteUL = document.querySelector('#quote-list');
        //Crear todos los elementos necesarios
            const quoteLi = document.createElement('li');
            const blockQuote = document.createElement('blockquote');
            const p = document.createElement('p');
            const footer = document.createElement('footer');
            const br = document.createElement('br');
            const hr = document.createElement('hr')
        //Creamos el boton de eliminar        
            const dislikesBtn = document.createElement('button');
        //Agregar clases e ids apropiados. Tome datos e insértelos si es necesario.
            quoteLi.className = 'quote-card';          //for styling
            blockQuote.className = 'blockquote';       //for styling
            p.className = 'mb-0';                      //for styling
            footer.className = 'blockquote-footer';    //for styling
            quoteLi.dataset.id = q.id
        //Tomar datos e insertarlos en los elementos creados
            p.innerHTML = q.full_name;
            footer.innerHTML = q.private;
        //Anexar todo al contenedor principal
            blockQuote.append(p, footer, br,dislikesBtn, hr);
            quoteLi.append(blockQuote);
            quoteUL.append(quoteLi);

            dislikesBtn.innerHTML = 'Delete';
            dislikesBtn.className = 'btn-danger';  //for styling
            dislikesBtn.addEventListener('click', () => deleteQuote())
            
            function deleteQuote(){
                const url = `${URL}${q.id}`;
                const reqObj = { method: 'DELETE' };
                fetch(url, reqObj)
                .then( quoteLi.remove() )
              }
          }
       }
    //Llama a la función que ejecutará automáticamente renderQuote() también 
       fetchData();
    })