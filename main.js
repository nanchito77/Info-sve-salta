
async function cargarNoticias() {
  const respuesta = await fetch('noticias.json');
  const archivos = await respuesta.json();

  const contenedor = document.getElementById('contenido');
  for (const archivo of archivos) {
    const res = await fetch(`noticias/${archivo}`);
    const texto = await res.text();
    const html = marked.parse(texto);
    const article = document.createElement('article');
    article.innerHTML = html;
    contenedor.appendChild(article);
  }
}
cargarNoticias();
