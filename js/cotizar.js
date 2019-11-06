$('#optcotiza').on('change', function(event){
    let selectedOpt = this.value
    $('#selection').empty();
    if (selectedOpt == 'venue'){
        $('#enviar').removeClass('hidden')
        var div1 = document.createElement('div')
        div1.setAttribute('class', 'cflex')
        var h1 = document.createElement('h1')
        h1.textContent = 'Datos'
        div1.append(h1)
        var textbox1 = document.createElement('input')
        var textbox2 = document.createElement('input')
        var textbox3 = document.createElement('input')
        var textbox4 = document.createElement('input')
        var textbox5 = document.createElement('input')
        textbox1.setAttribute('type', 'text')
        textbox1.setAttribute('placeholder', 'Nombre completo')
        textbox1.setAttribute('id', 'nombre')
        textbox1.setAttribute('class', 'txt')
        div1.append(textbox1)
        textbox2.setAttribute('type', 'text')
        textbox2.setAttribute('placeholder', 'Empresa')
        textbox2.setAttribute('id', 'empresa')
        textbox2.setAttribute('class', 'txt')
        div1.append(textbox2)
        textbox3.setAttribute('type', 'text')
        textbox3.setAttribute('placeholder', 'Giro de empresa')
        textbox3.setAttribute('id', 'giro')
        textbox3.setAttribute('class', 'txt')
        div1.append(textbox3)
        textbox4.setAttribute('type', 'text')
        textbox4.setAttribute('placeholder', 'Correo')
        textbox4.setAttribute('id', 'correo')
        textbox4.setAttribute('class', 'txt')
        div1.append(textbox4)
        textbox5.setAttribute('type', 'text')
        textbox5.setAttribute('placeholder', 'Telefono')
        textbox5.setAttribute('id', 'telefono')
        textbox5.setAttribute('class', 'txt')
        div1.append(textbox5)
        $('#selection').append(div1)
        //Evento
        var div2 = document.createElement('div')
        div2.setAttribute('class', 'cflex')
        var h12 = document.createElement('h1')
        h12.textContent = 'Datos evento'
        div2.append(h12)
        var select1 = document.createElement('select')
        select1.setAttribute('id', 'cd')
        var select2 = document.createElement('select')
        select2.setAttribute('id', 'venue')
        var select3 = document.createElement('select')
        select3.setAttribute('id', 'tipo')
        var select4 = document.createElement('select')
        select4.setAttribute('id', 'personas')
        select1.setAttribute('class', 'options')
        select2.setAttribute('class', 'options')
        select3.setAttribute('class', 'options')
        select4.setAttribute('class', 'options')
        //Dropdown cd
        var option1_1 = document.createElement('option')
        var option1_2 = document.createElement('option')
        var option1_3 = document.createElement('option')
        option1_1.setAttribute('value', 'mty')
        option1_1.textContent = 'Monterrey'
        option1_2.setAttribute('value', 'cdmx')
        option1_2.textContent = 'CDMX'
        option1_3.setAttribute('value', 'qrt')
        option1_3.textContent = 'Queretaro'
        select1.append(option1_1)
        select1.append(option1_2)
        select1.append(option1_3)
        //Dropdown venue
        var option2_1 = document.createElement('option')
        var option2_2 = document.createElement('option')
        var option2_3 = document.createElement('option')
        var option2_4 = document.createElement('option')
        option2_1.setAttribute('value', 'estadio')
        option2_1.textContent = 'Estadio Borregos'
        option2_2.setAttribute('value', 'cemex')
        option2_2.textContent = 'Terraza CEMEX'
        option2_3.setAttribute('value', 'sala')
        option2_3.textContent = 'Sala Borregos'
        option2_4.setAttribute('value', 'ale')
        option2_4.textContent = "Auditorio Luis Elizondo"
        select2.append(option2_1)
        select2.append(option2_2)
        select2.append(option2_3)
        select2.append(option2_4)
        //Dropdown evento
        var option3_1 = document.createElement('option')
        var option3_2 = document.createElement('option')
        var option3_3 = document.createElement('option')
        var option3_4 = document.createElement('option')
        var option3_5 = document.createElement('option')
        var option3_6 = document.createElement('option')
        var option3_7 = document.createElement('option')
        option3_1.setAttribute('value', 'deportivo')
        option3_1.textContent = 'Deportivo'
        option3_2.setAttribute('value', 'cultural')
        option3_2.textContent = 'Cultural'
        option3_3.setAttribute('value', 'educativo')
        option3_3.textContent = 'Educativo'
        option3_4.setAttribute('value', 'espectaculo')
        option3_4.textContent = "Espectaculo"
        option3_5.setAttribute('value', 'convencion')
        option3_5.textContent = 'Convencion'
        option3_6.setAttribute('value', 'empresarial')
        option3_6.textContent = 'Empresarial'
        option3_7.setAttribute('value', 'otro')
        option3_7.textContent = 'Otro'
        select3.append(option3_1)
        select3.append(option3_2)
        select3.append(option3_3)
        select3.append(option3_4)
        select3.append(option3_5)
        select3.append(option3_6)
        select3.append(option3_7)
        //Dropdown personas
        var option4_1 = document.createElement('option')
        var option4_2 = document.createElement('option')
        var option4_3 = document.createElement('option')
        var option4_4 = document.createElement('option')
        option4_1.setAttribute('value', '999')
        option4_1.textContent = 'Menos de 1000'
        option4_2.setAttribute('value', '1k-4k')
        option4_2.textContent = '1000-4000'
        option4_3.setAttribute('value', '4k-6k')
        option4_3.textContent = '4000-6000'
        option4_4.setAttribute('value', '6.1k')
        option4_4.textContent = "6000 o mas"
        select4.append(option4_1)
        select4.append(option4_2)
        select4.append(option4_3)
        select4.append(option4_4)
        //Append
        div2.append(select1)
        div2.append(select2)
        div2.append(select3)
        div2.append(select4)
        $('#selection').append(div2)
    }
    else if(selectedOpt == 'experiencia'){
        $('#enviar').removeClass("hidden")
        var p = document.createElement('h1')
        p.textContent = 'Datos'
        $('#selection').append(h1)
    }
})

$('#enviar').click(function(){
    var nombre = $('#nombre').val()
    var empresa = $('#empresa').val()
    var giro = $('#giro').val()
    var correo = $('#correo').val()
    var telefono = $('#telefono').val()
    let cd = $('#cd option:selected').text()
    let venue = $('#venue option:selected').text()
    let tipo = $('#tipo option:selected').text()
    let personas = $('#personas option:selected').text()
    
    json_to_send = {
        "nombre": nombre,
        "empresa": empresa,
        "giro": giro,
        "correo": correo,
        "telefono": telefono,
        "cd": cd,
        "venue": venue,
        "tipo": tipo,
        "personas": personas
    }

    json_to_send = JSON.stringify(json_to_send)

    $.ajax({
        //url: 'http://localhost:3000/mail',
        url: 'https://estadio-api.herokuapp.com/mail',
        headers: {
            'Content-Type':'application/json'
        },
        method: 'POST',
        dataType: 'json',
        data: json_to_send,
        success: function(data){
            console.log(data)
        },
        error: function(error_msg){
            console.log(error_msg);
            var err = (error_msg.responseText)
        }
    })
})
