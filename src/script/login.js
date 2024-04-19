async function Login() {
    const res = await fetch('https://startup-inter.vercel.app/login', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            username : document.getElementById('email').value,
            password : document.getElementById('password').value
        })
    })

    console.log(res.status)

    if(res.ok) {
        const { token } = await res.json()
        localStorage.setItem('tokenSphynx', token)
        return window.location.href = '/'
    }
    

    return alert('Falha no Login')
}