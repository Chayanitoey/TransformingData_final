//The main frame JS
    const sections = [...document.querySelectorAll("section")];
    const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);
    
    const inView = (section) => {
      let top = section.offsetTop;
      let height = section.offsetHeight;
    
      while (section.offsetParent) {
        section = section.offsetParent;
        top += section.offsetTop;
      }
    
      return (
        top < window.pageYOffset + window.innerHeight &&
        top + height > window.pageYOffset
      );
    };
    
    window.onscroll = () => {
      let next = false;
    
      sections.forEach((section) => {
        const a = getLinkById(section.id);
    
        if (inView(section) && !next) {
          a.classList.add("nav--current");
          next = true;
        } else {
          a.classList.remove("nav--current");
        }
      });
    };
// script for input field (for label effects only ** for input)


// 	$(window).load(function(){
// 		$(".col-3 input").val("");
		
// 		$(".input-effect input").focusout(function(){
// 			if($(this).val() != ""){
// 				$(this).addClass("has-content");
// 			}else{
// 				$(this).removeClass("has-content");
// 			}
// 		})
// 	});
	
//script for revealing answer

// import Svg2Roughjs from 'svg2roughjs'

// const svg2roughjs = new Svg2Roughjs('#output')
// const svg = document.getElementById('elesvg')
// svg2roughjs.svg = svg // or maybe use the DOMParser to load an SVG file instead
// svg2roughs.sketch()


// 
const first = document.getElementById('q1')
console.log(first)
first.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      var answer = event.target.value
      if (answer === '1') {
        alert('Correct!')
      } else {
        alert('WRONG!')
      }

  }
})

const second = document.getElementById('q2')
console.log(second)
second.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      var answer = event.target.value
      if (answer === '0') {
        alert('Correct!')
      } else {
        alert('WRONG!')
      }

  }
})

const third = document.getElementById('q3')
console.log(third)
third.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      var answer = event.target.value
      if (answer === '7') {
        alert('Correct!')
      } else {
        alert('WRONG!')
      }

  }
})

const fourt = document.getElementById('q4')
console.log(fourt)
fourt.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      var answer = event.target.value
      if (answer === '0') {
        alert('Correct!')
      } else {
        alert('WRONG!')
      }

  }
})

