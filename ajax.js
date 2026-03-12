window.onload = function () {

    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                var data = JSON.parse(xhr.responseText)
                var band = document.getElementById("bandName")
                var artist = document.getElementById("artist")

                for (var key in data) {
                    var bandOption = document.createElement("option")
                    bandOption.innerHTML = key
                    bandOption.value = key
                    band.appendChild(bandOption)
                }

                band.onchange = function () {
                    artist.innerHTML = "Select option"
                    var defaultOption = document.createElement("option")
                    defaultOption.innerHTML = "Select option"
                    defaultOption.value = ""
                    artist.appendChild(defaultOption)
                    var artists = data[this.value]

                    for (var i = 0; i < artists.length; i++) {
                        var artistOption = document.createElement("option")
                        artistOption.innerHTML = artists[i].name
                        artistOption.value = artists[i].value
                        artist.appendChild(artistOption)
                    }
                }

                artist.onchange = function () {
                    window.open(this.value)
                }
            }
        }
    }

    xhr.open("GET", "rockbands.json")
    xhr.send()

}