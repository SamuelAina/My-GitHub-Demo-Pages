    document.addEventListener("DOMContentLoaded", function() {
        const card = document.querySelector('.card');

        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
    });


    async function flaseyes() {
        const svgElement = document.getElementById('mySVG');
        const openImageSrc = 'images/odu-ifa-awo-open.png';
        const closedImageSrc = 'images/odu-ifa-awo-closed.png';

        let toggleCount = 0;
        const maxToggles = 6; // 3 times back and forth means 6 toggles
        const intervalTime = 2000; // Total duration 6000ms / 6 toggles = 1000ms per toggle

        const intervalId = setInterval(() => {
            if (svgElement.style.backgroundImage.includes('open')) {
                svgElement.style.backgroundImage = `url(${closedImageSrc})`;
            } else {
                svgElement.style.backgroundImage = `url(${openImageSrc})`;
            }
            toggleCount++;
            if (toggleCount >= maxToggles) {
                clearInterval(intervalId);
                const lhsTitle2 = document.getElementById('lhsTitle2');
                lhsTitle2.style.color="black"
                lhsTitle2.innerText="OK";                
                toggleBlur();
				refresh2();
            }
        }, intervalTime);
    }


    async function  animateRectangles() {
        const rectangles = document.querySelectorAll('.color-rect');

        const intervalId = setInterval(() => {
            rectangles.forEach(rect => {
                const randomColor = Math.random() > 0.5 ? 'red' : '#0098B6';
                rect.style.fill = randomColor;
            });
        }, 300);

        // Stop the interval after 5 seconds
        setTimeout(() => {
            clearInterval(intervalId);
        }, 11000);
    }

    function toggleBlur() {
        const h3Elements = document.querySelectorAll('h3');
        const tables = document.querySelectorAll('table');
        const vdCard = document.getElementById('dvCard');
        
        h3Elements.forEach(h3 => {
            h3.classList.toggle('blurred');
        });
        tables.forEach(table => {
            table.classList.toggle('blurred');
        }); 
        vdCard.classList.toggle('blurred_card');


        
    }

    function throwclicked(){
        const lhsTitle2 = document.getElementById('lhsTitle2');
        lhsTitle2.style.color="red";
        lhsTitle2.innerText="Divining...Please wait...";
        toggleBlur();
        refresh();
    }

    async function refresh() {
		await animateRectangles();
		await flaseyes();
	}    
    
    function refresh2(){
        var gm=showOpeleDice();
        /*
        currently in the form:
        1(0)  2(1)
        3(2)  4(3)
        5(4)  6(5)
        7(6)  8(7)  
        Needs to be rearranged     
        */
        gm_rearranged=[gm[0],gm[2],gm[4],gm[6],gm[1],gm[3],gm[5],gm[7]];
        bn=gm_rearranged.map(function(x){return x =="II" ? "1":"0"}).join("");
        od=getOdu(bn);

        document.getElementById("bin").innerText=bn;        
        document.getElementById("hex").innerText=binaryToHexadecimal(bn);
        document.getElementById("dec").innerText=binaryToDecimal(bn);
        document.getElementById("odl").innerText=od.odu;
        document.getElementById("odt").innerText=od.translation;
        document.getElementById("odi").innerText=od.id;
		
		document.getElementById("lhsTitle1").innerText=od.odu;
		document.getElementById("front_card").src="images/"+getFile(chr3(od.id));
		
    }
	
    function showOpeleDice(){
        var mySVG=document.getElementById("mySVG");
        var node_offset_x=50; 
        var node_offset_y=50; 
        var gm = Array.from({ length: 8 }, getRandomMark);
        
        var node1 ={x:150+node_offset_x+getRandomInteger(1, 30), y:0+node_offset_y,   mark:gm[0]};
        var node2 ={x:250+node_offset_x+getRandomInteger(1, 30), y:0+node_offset_y,   mark:gm[1]};
        var node3 ={x:100+node_offset_x+getRandomInteger(1, 30), y:100+node_offset_y, mark:gm[2]};
        var node4 ={x:250+node_offset_x+getRandomInteger(1, 30), y:100+node_offset_y, mark:gm[3]};

        var node5 ={x:150+node_offset_x+getRandomInteger(1, 30), y:200+node_offset_y, mark:gm[4]};
        var node6 ={x:300+node_offset_x+getRandomInteger(1, 30), y:200+node_offset_y, mark:gm[5]};
        var node7 ={x:100+node_offset_x+getRandomInteger(1, 30), y:300+node_offset_y, mark:gm[6]};
        var node8 ={x:325+node_offset_x+getRandomInteger(1, 30), y:300+node_offset_y, mark:gm[7]};

        var svghtml =
        `    	
                <!-- Nodes -->
                ${placeNode(node1.mark,node1.x,node1.y)}
                ${placeNode(node2.mark,node2.x,node2.y)}
                ${placeNode(node3.mark,node3.x,node3.y)}
                ${placeNode(node4.mark,node4.x,node4.y)}
                ${placeNode(node5.mark,node5.x,node5.y)}
                ${placeNode(node6.mark,node6.x,node6.y)}
                ${placeNode(node7.mark,node7.x,node7.y)}
                ${placeNode(node8.mark,node8.x,node8.y)}
                
                <!-- connections -->
                <!-- origin to apex of node 1 -->
                <line x1="250" y1="20" x2="${node1.x}" y2="${node1.y}" class="line"></line>

                <!-- origin to apex of node 2 -->
                <line x1="250" y1="20" x2="${node2.x}" y2="${node2.y}" class="line"></line>

                <!-- base of node 1 to apex of node 3 -->
                ${lineFromBaseNode1toApexNode2(node1, node3)}

                <!-- base of node 3 to apex of node 5 -->
                ${lineFromBaseNode1toApexNode2(node3, node5)}

                <!-- base of node 5 to apex of node 7 -->
                ${lineFromBaseNode1toApexNode2(node5, node7)}    
                
                <!-- base of node 2 to apex of node 4 -->
                ${lineFromBaseNode1toApexNode2(node2, node4)}    
        
                <!-- base of node 4 to apex of node 6 -->
                ${lineFromBaseNode1toApexNode2(node4, node6)}        
        
                <!-- base of node 6 to apex of node 8 -->
                ${lineFromBaseNode1toApexNode2(node6, node8)}         
            `;
            
        mySVG.innerHTML=svghtml;   

        return gm;
    }   


    function placeNodetext(nodeLabel){
        return `<text x="0" y="40" text-anchor="middle" fill="yellow" transform="rotate(0 25,25)">${nodeLabel}</text>`
    }

    function placeNode(nodeLabel,nodeX,nodeY){
        var nodeColour =nodeLabel=="I" ? "red" : "#0098B6;"; 

        return `<g transform="translate(${nodeX}, ${nodeY})">
                <g transform="rotate(45)">
                    <rect  class="color-rect" width="50" height="50" style="fill: ${nodeColour};"></rect>
                </g>
                ${placeNodetext(nodeLabel)}
            </g>`
    }

    function lineFromBaseNode1toApexNode2(node1, node2) {
        return `<line x1="${node1.x}" y1="${node1.y+70}" x2="${node2.x}" y2="${node2.y}" class="line"></line>`;
    }

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomMark() {
        const numerals = ["I", "II"];
        const randomIndex = Math.floor(Math.random() * numerals.length);
        return numerals[randomIndex];
    }    

    function binaryToHexadecimal(binaryString) {
        const decimalValue = parseInt(binaryString, 2);
        const hexadecimalString = decimalValue.toString(16).toUpperCase();
        return hexadecimalString;
    }   
    
    function binaryToDecimal(binaryString) {
        const decimalValue = parseInt(binaryString, 2);
        return decimalValue;
    }  
    
    function getOdu(bin){
        return odu.filter(function(a){return a.bin==bin})[0];
    }

	function getFile(a) {
		for (let i = 0; i < files.length; i++) {
			if (files[i].substring(0, 3) === a) {
				return files[i];
			}
		}
		return null; // Return null if no match is found
	}
	
	function chr3(number) {
    if (number < 1 || number > 999) {
        throw new Error("Input number must be between 1 and 999.");
    }
    
    return number.toString().padStart(3, '0');
	}
