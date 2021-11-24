import fetch from "node-fetch";

async function requisita() {
    const url = 'http://[::1]/api'

    let request =
    {
        user_name: "gerente",
        password: "1234"
    }

    /*
        POST
    */
    let respostaPost = await fetch(`${url}/auth/login`,
        {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        });


    /*
       armazena token
    */
    const jwt = await respostaPost.json().then((resp) => resp.token);


    /*
       GET
    */
    let respostaGet = await fetch(`${url}/clients/list`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        });
    console.log(await respostaGet.json());



}

requisita();