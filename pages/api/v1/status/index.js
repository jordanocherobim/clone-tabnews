function status(request, response) {
  response.status(200).json({ chave: "Esta requisição funcionou." });
}

export default status;
