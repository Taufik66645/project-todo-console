const todos = ['Write the letter', 'Eat some lunch', 'Run around the city']

const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    console.log(`[${index + 1}] ${item}`)
  }
}

showTodos(todos)
