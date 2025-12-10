document.getElementById("offerForm").addEventListener("submit", async function(event) {
    event.preventDefault()
    const title = document.getElementById("title").value
    const price = parseFloat(document.getElementById("price").value)
    const description = document.getElementById("description").value
    
    try {
        const response = await fetch("/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description
            })
        })
        if (!response.ok) {
            throw new Error("Upload failed")
        }
        const responseData = await response.json()
        console.log("Upload successful: ", responseData)
    } catch(error) {
        console.log("Error: ", error)
    }


})

