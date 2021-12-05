function show_volcano(){
    var select = document.getElementById('drop_down_planets');
    var text = select.options[select.selectedIndex].value;

    if(text == 'cinder_cone'){
        document.getElementById('selected_text').innerText = "You Selected a Cinder Cone Volcano! Cinder Cones have a crater at the very top. ";
        document.getElementById('img2').src="https://ars.els-cdn.com/content/image/3-s2.0-B9780128182345000183-f00018-39-9780128182345.jpg"
    }
    else if(text == 'lava_dome'){
        document.getElementById('selected_text').innerText = "You Selected a Lava Dome Volcano! Lava Dome Volcanos have lava build up at the top which pushes out the old lava to create a dome.";
        document.getElementById('img2').src="https://i.pinimg.com/originals/00/8e/1e/008e1efa709074dbd4e3fc273fcfd107.jpg"
    }
    else if(text == 'shield'){
        document.getElementById('selected_text').innerText = "You Selected a Shield Volcano! Shield Volcanos look like a warriors shield due to the little sloping sides.";
        document.getElementById('img2').src="https://static.educalingo.com/img/en/800/shield-volcano.jpg"
    }
    else if(text == 'composite'){
        document.getElementById('selected_text').innerText = "You Selected a Composite Volcano! Composisite Volcano eruptions have huge explosions and ash clouds with vents that release lava.";
        document.getElementById('img2').src="https://contentlab-data.s3.amazonaws.com/getty/c8c38af18ef3470197361af48689325f.jpg"
    }
    else{
        document.getElementById('selected_text').innerText = "Choose a Type of Volcano";
        document.getElementById('img2').src="https://ultimate-survival-training.com/wp-content/uploads/2018/01/italy-sicily-stromboli-volcano-eruption.jpg"
    }
}

function volcano_check(string){
    if(string == 'cc' ){
        document.getElementById('vol_2_text').style.color = "red"
        document.getElementById('vol_2_text').innerText = "Cinder Cone Volcanos have a steep slope";
        document.getElementById('cc_but').style.backgroundColor = "Red"
    }
    else if(string == 'ld' ){
        document.getElementById('vol_2_text').style.color = "red"
        document.getElementById('vol_2_text').innerText = "The Dome in the Lava Dome Volcanos does not help in increasing the size";
        document.getElementById('ld_but').style.backgroundColor = "Red"
    }
    else if(string == 's' ){
        document.getElementById('vol_2_text').style.color = "#90ee90"
        document.getElementById('vol_2_text').innerText = "Correct! The Shield Volcanos are the largest type of volcanos";
        document.getElementById('s_but').style.backgroundColor = "#90ee90"
    }
    else if(string == 'c' ){
        document.getElementById('vol_2_text').style.color = "red"
        document.getElementById('vol_2_text').innerText = "Composite Volcanos have a steep slope with vents";
        document.getElementById('c_but').style.backgroundColor = "Red"
    }
}

function volcano_check2(string){
    if(string == 'cc' ){
        document.getElementById('vol_3_text').style.color = "red"
        document.getElementById('vol_3_text').innerText = "Cinder Cone Volcano eruptions usually only reach to outside of the cone";
        document.getElementById('cc_but2').style.backgroundColor = "Red"
    }
    else if(string == 'ld' ){
        document.getElementById('vol_3_text').style.color = "red"
        document.getElementById('vol_3_text').innerText = "Lava Dome Volcano eruptions pile and hang around the vent";
        document.getElementById('ld_but2').style.backgroundColor = "Red"
    }
    else if(string == 's' ){
        document.getElementById('vol_3_text').style.color = "Red"
        document.getElementById('vol_3_text').innerText = "The Shield Volcanos are one of the most passive or mild volcanos";
        document.getElementById('s_but2').style.backgroundColor = "Red"
    }
    else if(string == 'c' ){
        document.getElementById('vol_3_text').style.color = "#90ee90"
        document.getElementById('vol_3_text').innerText = "Correct! Composite Volcanos are one of the most volatile creating huge eruptions and ash clouds";
        document.getElementById('c_but2').style.backgroundColor = "#90ee90"
    }
    

}