async function Login(event) {
    event.preventDefault()
    const senha = document.getElementById('password')
    const email = document.getElementById('email')
    
    if (!senha.value || !email.value) {
        alert('Preencha todos os campos')
        return
    }

    await fetch('https://startup-inter.vercel.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: senha.value
        })
    }).then(res => {
        if (!res.ok) {
            throw new Error('Falha no login')
        }
        return res.json()
    }).then(data => {
        localStorage.setItem('tokenSphynx', data.token)
        localStorage.setItem('nameSphynx', data.name)
        window.location.href = '/'
    }).catch(err => {
        console.error(err)
    })

}
