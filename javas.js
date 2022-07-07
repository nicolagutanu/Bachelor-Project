window.onload = function() {
    load_svgs();    
    const shapes = new Raphael(document.getElementById("shapes-menu"), 300, 728);
    const text = new Raphael(document.getElementById("text-menu"), 300, 728);
    const lines = new Raphael(document.getElementById("lines-menu"), 300, 728);    
    const paper = new Raphael(document.getElementById("canvas"), 860, 1000);
    document.getElementsByTagName("svg")[3].setAttribute("id", "paper-canvas");    
    
    let trash = paper.image("logos/trash.png", 800, 30, 50, 50);
    trash.node.setAttribute("class", "trash");

    let a5_btn = document.getElementById("a5-button");
    a5_btn.addEventListener("click", function() {
	let pages = document.getElementsByClassName("b5-page");
	while (pages.length != 0) {
		pages[0].remove();
	}
	let page = paper.rect(20, 20, 576, 792).attr({
		fill: "none",
		stroke: "#000000",
		"stroke-width": "2px"
	});
	page.node.setAttribute("class", "a5-page");
    });

    let b5_btn = document.getElementById("b5-button");
    b5_btn.addEventListener("click", function() {
	let pages = document.getElementsByClassName("a5-page");
	while (pages.length != 0) {
		pages[0].remove();
	}
	let page = paper.rect(20, 20, 672, 960).attr({
		fill: "none",
		stroke: "#000000",
		"stroke-width": "2px"
	});
	page.node.setAttribute("class", "b5-page");
    });


    // SHAPES
    let square = shapes.rect(50, 70, 70, 70).attr({
        fill: "#122034"
    });
    square.click(function () {
        move_square(paper);
    });

    let circle = shapes.circle(90, 240, 40).attr({
        fill: "#122034"
    });
    circle.click(function () {
        move_circle(paper);
    });

    let ellipse = shapes.ellipse(90, 370, 50, 30).attr({
        fill: "#122034"
    });
    ellipse.click(function () {
        move_ellipse(paper);
    });

    let rounded_square = shapes.rect(60, 460, 70, 70).attr({
        r: 15,
        fill: "#122034"
    });
    rounded_square.click(function () {
        move_rounded_square(paper);
    });

    let hexagon = shapes.path("M100 580 L140 600 L140 640 L100 660 L60 640 L60 600 L100 580 Z").attr({
        fill: "#122034"
    });
    hexagon.click(function () {
        move_hexagon(paper);
    });

    let triangle = shapes.path("M210 70 L245 140 L175 140 L210 70 Z").attr({
        fill: "#122034"
    });
    triangle.click(function () {
        move_triangle(paper);
    });

    let pentagon = shapes.path("M210 200 L255 230 L245 280 L175 280 L165 230 L210 200 Z").attr({
        fill: "#122034"
    });
    pentagon.click(function () {
        move_pentagon(paper);
    });

    let octagon = shapes.path("M195 335 L225 335 L245 355 L245 385 L225 405 L195 405 L175 385 L175 355 L195 335 Z").attr({
        fill: "#122034"
    });
    octagon.click(function () {
        move_octagon(paper);
    });

    let rectangle = shapes.rect(165, 470, 90, 50).attr({
        fill: "#122034"
    });
    rectangle.click(function () {
        move_rectangle(paper);
    });

    let rhombus = shapes.path("M205 570 L245 620 L205 670 L165 620 L205 570 Z").attr({
        fill: "#122034"
    });
    rhombus.click(function () {
        move_rhombus(paper);
    });


    // TEXT
    let abril_fatface = text.text(145, 15, "Abril Fatface").attr({
        "font-family": 'Abril Fatface',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    abril_fatface.click(function () {
        write_text(paper, 'Abril Fatface');
    });

    let ballet = text.text(145, 34, "Ballet").attr({
        "font-family": 'Ballet',
        "font-size": "30px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    ballet.click(function () {
        write_text(paper, 'Ballet');
    });

    let cinzel = text.text(145, 49, "Cinzel").attr({
        "font-family": 'Cinzel',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    cinzel.click(function () {
        write_text(paper, 'Cinzel');
    });

    let comfortaa = text.text(145, 66, "Comfortaa").attr({
        "font-family": 'Comfortaa',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    comfortaa.click(function () {
        write_text(paper, 'Comfortaa');
    });

    let cormorant_garamond = text.text(145, 82, "Cormorant Garamond").attr({
        "font-family": 'Cormorant Garamond',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    cormorant_garamond.click(function () {
        write_text(paper, 'Cormorant Garamond');
    });

    let dancing_script = text.text(145, 98, "Dancing Script").attr({
        "font-family": 'Dancing Script',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    dancing_script.click(function () {
        write_text(paper, 'Dancing Script');
    });

    let felipa = text.text(145, 118, "Felipa").attr({
        "font-family": 'Felipa',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    felipa.click(function () {
        write_text(paper, 'Felipa');
    });

    let geostar_fill = text.text(145, 134, "Geostar Fill").attr({
        "font-family": 'Geostar Fill',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    geostar_fill.click(function () {
        write_text(paper, 'Geostar Fill');
    });

    let great_vibes = text.text(145, 152, "Great Vibes").attr({
        "font-family": 'Great Vibes',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    great_vibes.click(function () {
        write_text(paper, 'Great Vibes');
    });

    let lobster = text.text(145, 170, "Lobster").attr({
        "font-family": 'Lobster',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    lobster.click(function () {
        write_text(paper, 'Lobster');
    });

    let miltonian = text.text(145, 190, "Miltonian").attr({
        "font-family": '"Miltonian", cursive',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    miltonian.click(function () {
        write_text(paper, 'Miltonian');
    });

    let montecarlo = text.text(145, 208, "MonteCarlo").attr({
        "font-family": 'MonteCarlo',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    montecarlo.click(function () {
        write_text(paper, 'MonteCarlo');
    });

    let orbitron = text.text(145, 226, "Orbitron").attr({
        "font-family": 'Orbitron',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    orbitron.click(function () {
        write_text(paper, 'Orbitron');
    });

    let parisienne = text.text(145, 244, "Parisienne").attr({
        "font-family": 'Parisienne',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    parisienne.click(function () {
        write_text(paper, 'Parisienne');
    });

    let pinyon_script = text.text(145, 260, "Pinyon Script").attr({
        "font-family": 'Pinyon Script',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    pinyon_script.click(function () {
        write_text(paper, 'Pinyon Script');
    });

    let playfair_display = text.text(145, 280, "Playfair Display").attr({
        "font-family": 'Playfair Display',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    playfair_display.click(function () {
        write_text(paper, 'Playfair Display');
    });

    let roboto = text.text(145, 298, "Roboto").attr({
        "font-family": 'Roboto',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    roboto.click(function () {
        write_text(paper, 'Roboto');
    });

    let romanesco = text.text(145, 314, "Romanesco").attr({
        "font-family": 'Romanesco',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    romanesco.click(function () {
        write_text(paper, 'Romanesco');
    });

    let send_flowers = text.text(145, 330, "Send Flowers").attr({
        "font-family": 'Send Flowers',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    send_flowers.click(function () {
        write_text(paper, 'Send Flowers');
    });

    let teko = text.text(145, 344, "Teko").attr({
        "font-family": '"Teko", sans-serif',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    teko.click(function () {
        write_text(paper, 'Teko');
    });

    let tienne = text.text(145, 358, "Tienne").attr({
        "font-family": '"Tienne", serif',
        "font-size": "26px",
        cursor: "context-menu",
        stroke: "#122034",
        fill: "#122034"
    });
    tienne.click(function () {
        write_text(paper, 'Tienne');
    });


    // LINES
    let rect_line1 = lines.rect(15, 5, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line1 = lines.path("M50 20 H250 Z").attr({
        "stroke": "black",
        "stroke-width": "1px"
    });
    rect_line1.click(function () {
        draw_line(paper, "1px", "black");
    });
    line1.click(function () {
        draw_line(paper, "1px", "black");
    });

    let rect_line2 = lines.rect(15, 45, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line2 = lines.path("M50 60 H250 Z").attr({
        "stroke": "black",
        "stroke-width": "3px"
    });
    rect_line2.click(function () {
        draw_line(paper, "3px", "black");
    });
    line2.click(function () {
        draw_line(paper, "3px", "black");
    });

    let rect_line3 = lines.rect(15, 85, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line3 = lines.path("M50 100 H250 Z").attr({
        "stroke": "black",
        "stroke-width": "5px"
    });
    rect_line3.click(function () {
        draw_line(paper, "5px", "black");
    });
    line3.click(function () {
        draw_line(paper, "5px", "black");
    });

    let rect_line4 = lines.rect(15, 125, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line4 = lines.path("M50 140 H250 Z").attr({
        "stroke": "black",
        "stroke-width": "7px"
    });
    rect_line4.click(function () {
        draw_line(paper, "7px", "black");
    });
    line4.click(function () {
        draw_line(paper, "7px", "black");
    });

    let rect_line5 = lines.rect(15, 165, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line5 = lines.path("M50 180 H250 Z").attr({
        "stroke": "blue",
        "stroke-width": "1px"
    });
    rect_line5.click(function () {
        draw_line(paper, "1px", "blue");
    });
    line5.click(function () {
        draw_line(paper, "1px", "blue");
    });

    let rect_line6 = lines.rect(15, 205, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line6 = lines.path("M50 220 H250 Z").attr({
        "stroke": "blue",
        "stroke-width": "3px"
    });
    rect_line6.click(function () {
        draw_line(paper, "3px", "blue");
    });
    line6.click(function () {
        draw_line(paper, "3px", "blue");
    });

    let rect_line7 = lines.rect(15, 245, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line7 = lines.path("M50 260 H250 Z").attr({
        "stroke": "blue",
        "stroke-width": "5px"
    });
    rect_line7.click(function () {
        draw_line(paper, "5px", "blue");
    });
    line7.click(function () {
        draw_line(paper, "5px", "blue");
    });

    let rect_line8 = lines.rect(15, 285, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line8 = lines.path("M50 300 H250 Z").attr({
        "stroke": "blue",
        "stroke-width": "7px"
    });
    rect_line8.click(function () {
        draw_line(paper, "7px", "blue");
    });
    line8.click(function () {
        draw_line(paper, "7px", "blue");
    });

    let rect_line9 = lines.rect(15, 325, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line9 = lines.path("M50 340 H250 Z").attr({
        "stroke": "green",
        "stroke-width": "1px"
    });
    rect_line9.click(function () {
        draw_line(paper, "1px", "green");
    });
    line9.click(function () {
        draw_line(paper, "1px", "green");
    });

    let rect_line10 = lines.rect(15, 365, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line10 = lines.path("M50 380 H250 Z").attr({
        "stroke": "green",
        "stroke-width": "3px"
    });
    rect_line10.click(function () {
        draw_line(paper, "3px", "green");
    });
    line10.click(function () {
        draw_line(paper, "3px", "green");
    });

    let rect_line11 = lines.rect(15, 405, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line11 = lines.path("M50 420 H250 Z").attr({
        "stroke": "green",
        "stroke-width": "5px"
    });
    rect_line11.click(function () {
        draw_line(paper, "5px", "green");
    });
    line11.click(function () {
        draw_line(paper, "5px", "green");
    });

    let rect_line12 = lines.rect(15, 445, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line12 = lines.path("M50 460 H250 Z").attr({
        "stroke": "green",
        "stroke-width": "7px"
    });
    rect_line12.click(function () {
        draw_line(paper, "7px", "green");
    });
    line12.click(function () {
        draw_line(paper, "7px", "green");
    });

    let rect_line13 = lines.rect(15, 485, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line13 = lines.path("M50 500 H250 Z").attr({
        "stroke": "red",
        "stroke-width": "1px"
    });
    rect_line13.click(function () {
        draw_line(paper, "1px", "red");
    });
    line13.click(function () {
        draw_line(paper, "1px", "red");
    });

    let rect_line14 = lines.rect(15, 525, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line14 = lines.path("M50 540 H250 Z").attr({
        "stroke": "red",
        "stroke-width": "3px"
    });
    rect_line14.click(function () {
        draw_line(paper, "3px", "red");
    });
    line14.click(function () {
        draw_line(paper, "3px", "red");
    });

    let rect_line15 = lines.rect(15, 565, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line15 = lines.path("M50 580 H250 Z").attr({
        "stroke": "red",
        "stroke-width": "5px"
    });
    rect_line15.click(function () {
        draw_line(paper, "5px", "red");
    });
    line15.click(function () {
        draw_line(paper, "5px", "red");
    });

    let rect_line16 = lines.rect(15, 605, 270, 30).attr({
        fill: "rgb(255, 255, 255)",
        "fill-opacity": 1,
        stroke: "rgb(255, 255, 255)",
        "stroke-opacity": 1
    });
    let line16 = lines.path("M50 620 H250 Z").attr({
        "stroke": "red",
        "stroke-width": "7px"
    });
    rect_line16.click(function () {
        draw_line(paper, "7px", "red");
    });
    line16.click(function () {
        draw_line(paper, "7px", "red");
    });


    // BUTTONS FOR LINE MENU
    let line_done_rect = lines.rect(50, 660, 90, 40).attr({
        fill: "#122034",
        stroke: "white",
        r: 8,
        cursor: "context-menu"
    });
    let line_done_text = lines.text(95, 343, "Line Done").attr({
        "font-family": 'Abril Fatface',
        "font-size": "16px",
        cursor: "context-menu",
        fill: "white"
    });
    line_done_rect.node.setAttribute("onclick", "stop_line()");
    line_done_rect.node.setAttribute("class", "line-button");
    line_done_text.node.setAttribute("onclick", "stop_line()");

    let line_undo_rect = lines.rect(150, 660, 90, 40).attr({
        fill: "#122034",
        stroke: "white",
        r: 8,
        cursor: "context-menu"
    });
    let line_undo_text = lines.text(195, 343, "Undo Line").attr({
        "font-family": 'Abril Fatface',
        "font-size": "16px",
        cursor: "context-menu",
        fill: "white"
    });
    line_undo_rect.node.setAttribute("onclick", "undo_line()");
    line_undo_rect.node.setAttribute("class", "line-button");
    line_undo_text.node.setAttribute("onclick", "undo_line()");

};

let i=0;
function setClassNamesAndTransformSettings(paper, shape, shapeType, ratio) {
    shape.node.setAttribute("class", shapeType + i);
    const ft = paper.freeTransform(shape, { snap: {rotate: 15, scale: 25}, keepRatio: ratio });
    let middle = document.getElementsByTagName("svg")[3].getElementsByClassName("handle center")[0];
    middle.setAttribute("class", "center " + shapeType + i);
    middle.addEventListener('mousemove', (event) => {
        if (event.target.getAttribute("cx") >= 800 && event.target.getAttribute("cx") <= 850)
            if (event.target.getAttribute("cy") >= 30 && event.target.getAttribute("cy") <= 80) {
                ft.unplug();
                shape.remove();
            }
    });
    i++;
}

function move_square(paper) {
    let s = paper.rect(100, 100, 100, 100).attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, s, "square", true);
}

function move_circle(paper) {
    let c = paper.circle(100, 100, 50).attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, c, "circ", true);
}

function move_ellipse(paper) {
    let e = paper.ellipse(100, 100, 50, 30).attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, e, "ellipse", false);
}

function move_rounded_square(paper) {
    let round_s = paper.rect(100, 100, 100, 100).attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        r: 15
    });
    setClassNamesAndTransformSettings(paper, round_s, "round_s", true);
}

function move_hexagon(paper) {
    let h = paper.path("M100 100 L140 140 L140 180 L100 220 L60 180 L60 140 L100 100 Z").attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, h, "hexagon", false);
}

function move_triangle(paper) {
    let t = paper.path("M100 100 L135 170 L65 170 L100 100 Z").attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, t, "triangle", false);
}

function move_pentagon(paper) {
    let p = paper.path("M100 100 L145 130 L135 180 L65 180 L55 130 L100 100 Z").attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, p, "pentagon", false);
}

function move_octagon(paper) {
    let o = paper.path("M100 100 L130 100 L150 120 L150 150 L130 170 L100 170 L80 150 L80 120 L100 100 Z").attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, o, "octagon", false);
}

function move_rectangle(paper) {
    let r = paper.rect(100, 100, 90, 50).attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, r, "rect", false);
}

function move_rhombus(paper) {
    let r = paper.path("M100 100 L140 150 L100 200 L60 150 L100 100 Z").attr({
        fill: "none",
        stroke: "rgb(0, 0, 0)"
    });
    setClassNamesAndTransformSettings(paper, r, "rhombus", false);
}

function write_text(paper, font) {
    let text = paper.text(125, 75, "Edit here").attr({
        "font-family": font,
        "font-size": "26px"
    });

    paper.inlineTextEditing(text);

    text.click(function(){
        // Retrieve created <input type=text> field
        var input = this.inlineTextEditing.startEditing();

        input.addEventListener("blur", function(e){
            // Stop inline editing after blur on the text field
            text.inlineTextEditing.stopEditing();
        }, true);
    });
    const ft_rect = paper.freeTransform(text, { snap: {scale: 25, drag: 50} });

    let middle = document.getElementsByTagName("svg")[3].getElementsByClassName("handle center")[0];
    middle.setAttribute("class", "center text");
    middle.addEventListener('mousemove', (event) => {
        if (event.target.getAttribute("cx") >= 800 && event.target.getAttribute("cx") <= 850)
            if (event.target.getAttribute("cy") >= 30 && event.target.getAttribute("cy") <= 80) {
                ft_rect.unplug();
                text.remove();
            }
    });
}

j=0;
function draw_line(paper, w, s) {
    const circle = paper.circle(12, 12, 10).attr({
        fill: '#fff',
        'fill-opacity': 0,
        'stroke-width': 2,
        stroke: s
    });
    circle.node.setAttribute("class", "circle-line");

    let line;
    const clone_handler = function () {
        const x = this.clone();
        x.drag(move, start, up);
    };
    let start = function (x, y, event) {
            this.ox = this.attr("cx");
            this.oy = this.attr("cy");
            line = paper.path("M"+" "+this.ox+" "+this.oy).attr({
                "stroke-width": w,
                "stroke": s
            });
            line.node.setAttribute("class", "path");
        },
        move = function (dx, dy) {
            this.attr({
                cx: this.ox + dx,
                cy: this.oy + dy
            });
        },
        move2 = function () {
            line.remove();
            line = paper.path("M"+" "+this.ox+" "+this.oy+"L"+this.attr("cx")+" "+this.attr("cy")).attr({
                "stroke-width": w,
                "stroke": s
            });
            line.node.setAttribute("class", "line-" + j);
            j++;
        }
    let up = function () {
        this.animate({
            r: 10,
            opacity: '.8',
        }, 500, ">");
        this.node.setAttribute("class", "circle-line");
        this.drag(move2, start, up);
    };
    circle.mousemove(clone_handler);
}

function undo_line() {
    let paths =  document.getElementsByTagName("svg")[3].getElementsByTagName("path");
    let lines = [];
    for (let i=0; i<paths.length; i++) {
        if ((paths[i].getAttribute("class") != null && !paths[i].getAttribute("class").indexOf("line")) || (paths[i].getAttribute("class") != null && !paths[i].getAttribute("class").indexOf("path"))) {
            lines.push(paths[i]);
        }
    }
    lines.reverse();
    lines[0].remove();
    lines.shift();
    while (!lines[0].getAttribute("class").indexOf("path")) {
        lines[0].remove();
        lines.shift();
    }
    let paths_remove = document.getElementsByClassName("path");
    len = paths_remove.length;
    for (let i=0; i<len; i++) {
        paths_remove[0].remove();
    }
}

function stop_line() {
    let circles = document.getElementsByClassName("circle-line");
    let len = circles.length;
    for (let i=0; i<len; i++) {
        circles[0].remove();
    }
    let paths = document.getElementsByClassName("path");
    len = paths.length;
    for (let i=0; i<len; i++) {
        paths[0].remove();
    }
}

function show_shapes_menu() {
    let shapes_menu = document.getElementById("shapes-menu");
    let text_menu = document.getElementById("text-menu");
    let lines_menu = document.getElementById("lines-menu");
    shapes_menu.style.display = "block";
    text_menu.style.display = "none";
    lines_menu.style.display = "none";
}

function show_text_menu() {
    let shapes_menu = document.getElementById("shapes-menu");
    let text_menu = document.getElementById("text-menu");
    let lines_menu = document.getElementById("lines-menu");
    shapes_menu.style.display = "none";
    text_menu.style.display = "block";
    lines_menu.style.display = "none";
}


function show_lines_menu() {
    let shapes_menu = document.getElementById("shapes-menu");
    let text_menu = document.getElementById("text-menu");
    let lines_menu = document.getElementById("lines-menu");
    shapes_menu.style.display = "none";
    text_menu.style.display = "none";
    lines_menu.style.display = "block";
}

function signup() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let data = "username=" + username + "&password=" + password;
	$.ajax({
            type: "POST",
            url: "php_functions/signup.php",
            data: data,
            success: function (resp) {
            	if (resp == "success") {
			window.location.href = "index.php";
		} else {
			alert(resp);
			window.location.href = "index.php";
		}
            }
        });
}

function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let data = "username=" + username + "&password=" + password;
	$.ajax({
            type: "POST",
            url: "php_functions/login.php",
            data: data,
            success: function (resp) {
               	if (resp == "success") {
			window.location.href = "index.php";
		} else {
			alert("Something went wrong :(");
			window.location.href = "index.php"
		}
            }
        });
}


function logout() {
	$.ajax({
            type: "POST",
            url: "php_functions/logout.php",
            success: function () {
                window.location.href = "index.php";       
	     }
        });

}

function save_svg() {
	let file_name = document.getElementById("file-name").value;
	let svg = document.getElementById("paper-canvas").getElementsByTagName("*");
	let data = "file=" + file_name;
	$.ajax({
            type: "POST",
            url: "php_functions/save_svg.php",
            data: data,
            success: function (resp) {
            	if (resp == "failure") {
			alert("Failure to save");
		} else {
			for (let i=0; i<svg.length; i++) {
				let data = "line=" + svg[i].outerHTML + "&id=" + resp;
				$.ajax({
          				type: "POST",
            				url: "php_functions/save_line.php",
            				data: {
						line: svg[i].outerHTML,
						id: resp
					},
            				success: function (resp) { }
        			});
			}
		}
            }
        });
	document.getElementById("file-name").value = "";
	window.location.href = "index.php";
}

function load_svgs() {
	$.ajax({
            type: "POST",
	    dataType:"json",
            url: "php_functions/load_svg.php",
            success: function (resp) {
		let list = document.getElementById("list");
		for (let i=0; i<resp.length; i++) {
			var entry = document.createElement('li');
			entry.setAttribute('onclick','open_svg(\''+resp[i]+'\')');
 	   		entry.appendChild(document.createTextNode(resp[i]));
    			list.appendChild(entry);
		}
            }
        });
}

function open_svg(svg_name) {
	let data = "svg=" + svg_name;
	$.ajax({
            type: "POST",
	    data: data,
            url: "php_functions/open_svg.php",
            success: function (resp) {
		document.getElementById("paper-canvas").innerHTML = resp;
            }
        });
}

function blank_page() {
	let canvas = document.getElementById("canvas");
	canvas.setAttribute("style", "width: 880px; height: 728px; border: 2px solid black; background-color: white; margin-right: 20px; overflow: auto;");
}

function dotted_page() {
	let canvas = document.getElementById("canvas");
	canvas.setAttribute("style", "width: 880px; height: 728px; border: 2px solid black; background-color: white; margin-right: 20px; background-image: radial-gradient(grey 1px, transparent 0); background-size: 25px 25px; background-position: 10px 10px; overflow: auto;");
}


function download_svg() {
 	if (document.getElementById("download-file-name").value == "" || document.getElementById("download-file-name").value == null) {
		alert("Please input a file name");
		return;
	}
	let def = document.getElementById("paper-canvas").getElementsByTagName("defs")[0];
        let s = document.createElement('style');
        s.setAttribute("type", "text/css");
        s.innerHTML="@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface');@import url('https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72');@import url('https://fonts.googleapis.com/css2?family=Cinzel');@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300');@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300');@import url('https://fonts.googleapis.com/css2?family=Dancing+Script');@import url('https://fonts.googleapis.com/css2?family=Felipa');@import url('https://fonts.googleapis.com/css2?family=Geostar+Fill');@import url('https://fonts.googleapis.com/css2?family=Great+Vibes');@import url('https://fonts.googleapis.com/css2?family=Lobster');@import url('https://fonts.googleapis.com/css2?family=Miltonian');@import url('https://fonts.googleapis.com/css2?family=MonteCarlo');@import url('https://fonts.googleapis.com/css2?family=Orbitron');@import url('https://fonts.googleapis.com/css2?family=Parisienne');@import url('https://fonts.googleapis.com/css2?family=Pinyon+Script');@import url('https://fonts.googleapis.com/css2?family=Playfair+Display');@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100');@import url('https://fonts.googleapis.com/css2?family=Romanesco');@import url('https://fonts.googleapis.com/css2?family=Send+Flowers');@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300');@import url('https://fonts.googleapis.com/css2?family=Tienne');";
        def.appendChild(s);
	let file_name = document.getElementById("download-file-name").value + ".svg";
	let svg = document.getElementsByTagName("svg")[3].outerHTML;
	let a_element = document.getElementById("for-download");
	a_element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(svg));
        a_element.setAttribute('download', file_name);
        a_element.click();
	document.getElementById("download-file-name").value = "";
	s.remove();
}

function clear_handles() {
    let everything = document.getElementsByTagName("svg")[3].childNodes;
    let p=0;
    while (p < everything.length) {
        if (everything[p].nodeName !== "text" && everything[p].nodeName !== "defs" && everything[p].nodeName !== "desc" && everything[p].nodeName !== "tspan") {
            if ((everything[p].getAttribute("class") === null && everything[p].nodeName === "path") || !everything[p].getAttribute("class").indexOf("center") || !everything[p].getAttribute("class").indexOf("handle")) {
                everything[p].remove();
            } else {
                p++;
            }
        } else {
            p++;
        }
    }
}

function clear_page() {
    let everything = document.getElementsByTagName("svg")[3].childNodes;
    let p=0;
    while (everything.length !== 3) {
        if (everything[p].nodeName !== "desc" && everything[p].nodeName !== "image" && everything[p].nodeName !== "defs") {
            everything[p].remove();
        } else {
            p++;
        }
    }
}