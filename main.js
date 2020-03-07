function chnageText() {
    var change = document.getElementById('dogy')
    change.innerHTML = "Dogy dogy dogy ....."
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function (resp) {
            console.log(resp)

            var dogpic = document.createElement('img')
            dogpic.setAttribute("id", 'images')
            dogpic.setAttribute("src", `${resp.data.message}`)

            document.getElementById('container').appendChild(dogpic)
            change.innerHTML = "add"

        });

    axios.get('https://dog.ceo/api/breeds/list')
        .then(function (dogyarray) {
            dogyarray.data.message.map(function (ele) {
                var select = document.createElement('select');
                var option = document.createElement('option');
                option.setAttribute("id", 'optionname')
                option.innerHTML = `${ele}`
                // select.appendChild(option);
                document.getElementById('selects').appendChild(option)
                // change.appendChild(select)
            })
        });

    var selectList = document.getElementById('selects')

    selectList.addEventListener('change', function () {
        axios.get(`https://dog.ceo/api/breed/${this.value}/images/random`).then(function (changeimg) {
            var newpic = document.getElementById('images')
            newpic.setAttribute("src", `${changeimg.data.message}`)
        })

    })

}

