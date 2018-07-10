// please note that i am using es6 syntexs but i can also with traditional javascript

// mocking data
const carTitle = "Maruti Suzuki Swift"
const carColors = ["blue","grey","red","silver"];
const carRatings = {Overall:75,Looks:95,Performance:75,"Comfort":75,"Fuel_Economy":95,"Value_For_Money":75}

// all elements from html 
const titleEl = document.querySelector("#title");
const clrBtnEl = document.querySelector("#color_ops");
const carImgEl = document.querySelector("#car_img");
const meterEl = document.querySelector("#meter");
const meterDivEl = document.querySelector("#meter_div");
const ratingEl = document.querySelector("#rating");
const overallEl = document.querySelector(".Overall");
const selectedColorEl = document.querySelector("#selected_color");

// setting title from data
titleEl.innerHTML = `${carTitle}'s <strong>raiting</strong>`

// titrate every avilable colour from carColors array and creates a button
carColors.map(d=>{
	clrBtnEl.innerHTML += `<div class='round-btn-wrap'><button class='rounded ${d} card-2' onclick="carClr('${d}')"></button><div>`;
})

// shows selected car images
const carClr = (clr) =>{
	carImgEl.innerHTML = `<img id='car_display' src='./assets/${clr}.jpg'>`;
	selectedColorEl.innerHTML = `selected color <strong>${clr}</strong>`;
}

// titrate every avilable ratings from carRatings array and creates progress-bar
for(raing in carRatings){

	if('Overall' !== raing){

		let title = raing.replace(/_/g," ");

		ratingEl.innerHTML += `<p>${title}</p>
					<div style="display: flex;">
						<div class='progressbar'>
							<div class='progressbar_inner ${raing}'></div>
						</div>
						&nbsp;
						<span style="margin: auto;"><strong>${carRatings[raing]}%</strong></span>
					</div>`
	}else{
		overallEl.innerHTML = `<p style='text-align: center; margin:auto;'>${carRatings[raing]}</p>`
	}

}


// converts percentage to digree in 180 format
let perToDigg = int => (int/100)*180;

let digg = perToDigg(carRatings.Overall);

// small time-out for animation
setTimeout(()=>{
	meterEl.style.transform = `rotate(${digg}deg)`;	
	for(raing in carRatings){
		if('Overall' !== raing){
				let el = document.querySelector("."+raing);
				el.style.width = `${carRatings[raing]}%`;
		}
	}
},500)


// setting default colour as blue
carClr("blue");
