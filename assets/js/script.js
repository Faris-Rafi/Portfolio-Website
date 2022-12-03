$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
})

const showAllskills = () => {
    $.getJSON('skills.json', function (data) {
        let skills = data.skills

        $.each(skills, function (i, data) {
            $('#my-skills').append(`
                <div class="skills col bg-white p-2 rounded">
                    <div class="d-flex flex-column align-items-center  justify-content-center">
                        <img src="`+ data.img +`" alt="`+ data.name +`" width="120">
                        <h6 class="text-center mt-3">`+ data.name +`</h6>
                    </div>
                </div>
            `)
        })
    })
}

showAllskills()

const showAllproject = () => {
    $.getJSON('project.json', function (data) {
        let project = data.project

        $.each(project, function (i, data) {
            $('#my-project').append(`
                <div class="card" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#projectModal">
                    <div class="d-flex flex-column justify-content-center align-content-start align-items-start text-center bg-dark">
                        <p class="p-2 text-white fw-bold">`+ data.year +`</p>
                        <img src="assets/img/web.png" class="card-img-top" alt="web">
                    </div>
                    <div class="card-body pb-5">
                        <h6 class="card-title text-center">`+ data.name +`</h6>
                        <p class="card-text text-center" style="font-size: 12px;">`+ data.technology +`</p>
                    </div>
                </div>
            `)
        })

        $.each(project, function(i, data) {
            $('#modal-header').append(`
                <h5 class="modal-title">`+ data.name +`</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            `)

            $('#descriptionProject').append(`
                <h5 class="mb-4">Year : `+ data.year +`</h5>
                <h5>Description : </h5>
                <p class="mb-4">`+ data.description +`</p>
                <h5>Technology : </h5>
                <p class="mb-4">`+ data.technology +`</p>
                <h5>View More :</h5>
                <a href="`+ data.link +`" target="_blank">`+ data.link +`</a>
            `)
        })
    })
}

showAllproject()

const scrollButton = () => {
    let button = document.getElementById("scroll-button")
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
}

window.onscroll = function() {
    scrollButton()
}

const scrollToUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('#scroll-button').removeClass('d-block')
}