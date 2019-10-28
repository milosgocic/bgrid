var data = null;
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Services

function get (method) {
    return new Promise(function(resolve, reject) {
        $.ajax({
          url: `https://my-json-server.typicode.com/milosgocic/usersdb/${method}`,
          type: 'get',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: resolve,
          error: reject
        });
      });
}

function post () {
    
}

// User Service

async function getAllUsers () {
    return await get('users');
}

function fillTable() {
    const data = []
    return getAllUsers()
        .then((result) => {
            data = result;
        })
        .catch((error) => {
            console.log(error)
        })

    // for (za svaki data) {
    //     i.id
    //     i.name
    //     create html td = 'i.id'
    // }

    // appendNode
}