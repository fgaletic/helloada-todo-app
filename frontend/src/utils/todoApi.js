
import API_URL from "./apiWrapper";

export const getTodos = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data 
}

export const addTodo = async (data) => {
    try {
        const response = await fetch(API_URL, {
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
        const response = await fetch(`${API_URL}/${id}`, {
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
        const response = await fetch(`${API_URL}/${id}`, {
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