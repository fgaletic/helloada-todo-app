
const API_URL = "http://localhost:3000"

export const getTodos = async () => {
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addTodo = async (data) => {
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const todo = await response.json()
        return todo
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: "DELETE"
        }
        )
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

export const updateTodo = async (id, done) => {
    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(done)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }

}