
//  let whatImage = document.getElementById('image');
//  let button = document.getElementById('button');
//  let imageList = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg",]
//  let currentIndex = 0;

// function changeImage(){
//     button.addEventListener('click', Event => {
//         if(currentIndex < 4){
//             currentIndex++;
//             whatImage.src = imageList[currentIndex];
//         }else{
//             currentIndex = 0;
//             whatImage.src = imageList[currentIndex];
//         }
       
//     })
// }

// changeImage()


let whatImage = document.getElementById('image');
let button = document.getElementById('button');
let imageList = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg",]
let currentIndex = 0;

function changeImage(){
   
       if(currentIndex < 4){
           currentIndex++;
           whatImage.src = imageList[currentIndex];
       }else{
           currentIndex = 0;
           whatImage.src = imageList[currentIndex];
       }
      
   
}

setInterval(changeImage, 3000)

