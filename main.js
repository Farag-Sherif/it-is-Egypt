// Show other programs @media (min-width: 768px)

let openOurPrograms = document.querySelector('.our-program-list .open-our-programs')

openOurPrograms.addEventListener('click', ()=>{

    document.querySelector('.our-program-list .other-programs').style.display = 'flex'
})

// open list items at media max-width= 767px

let buttonToOpenListItems = document.querySelector('header .container .button');

buttonToOpenListItems.addEventListener('click', function() {
    
    const listItems = document.querySelector('header .container .list-items')  
    listItems.classList.add('active-list-items') 
    
    const listItemsBefore = document.querySelector('header .list-items-before')  
    listItemsBefore.style.display ="block"
    
    listItemsBefore.addEventListener('click', function(){
        
        listItems.classList.remove('active-list-items')  
        
        listItemsBefore.style.display ="none"
    })
})

// Show other programs

let ourPrograms = document.querySelector('header .container .list-items #our-programs');

ourPrograms.addEventListener('click', ()=>{
    document.querySelector('header .container .list-items .visibility').classList.toggle('active-visibility')
})


//all movement in pages

document.addEventListener('scroll', function() {
	
    const positionScrolling = window.scrollY ;

    // Special animations for an landing on a page index.html

    const sky = document.querySelector('.landing .sky')
    const text = document.querySelector('.landing .text')
    const pyramidsTwo = document.querySelector('.landing .pyramidsTwo')
    const pyramidsOne = document.querySelector('.landing .pyramidsOne')

    if(sky !== null && text !== null && pyramidsTwo !== null && pyramidsOne !== null){

        sky.style.transform =`translateY(-${positionScrolling / 2.5}px)`
        text.style.transform =`translate(-50% , -${50 - positionScrolling / 4}% )`
        pyramidsTwo.style.transform =`translateX(-${positionScrolling / 2.5}px)`
        pyramidsOne.style.transform =`translateX(${positionScrolling / 2.5}px)`
    }

    // first text movement on all pages

    const experienceText = document.querySelector('.experience-egypt .experience-text')  
    if(experienceText !== null){
        const experienceTextTop = experienceText.offsetTop + 100;
        if (positionScrolling >= experienceTextTop) {
            experienceText.classList.add('display-experience-text'); 
        }else{
            experienceText.classList.remove('display-experience-text'); 
        }
    }

    // Video movement on all pages

    const experienceVideo = document.querySelector('.experience-egypt .experience-video')  
    if(experienceVideo !== null){
        const experienceVideoTop = experienceVideo.offsetTop + 100;
        const experienceVideoBottom = experienceVideoTop + experienceVideo.offsetHeight + 1000  
        if (positionScrolling >= experienceVideoTop && positionScrolling < experienceVideoBottom) {
            experienceVideo.classList.add('display-experience-video'); 
        }else{
            experienceVideo.classList.remove('display-experience-video'); 
        } 
    }

    // Egypt word latitude in all languages

    const firstLine = document.querySelector('.first-line');
    const secondLine = document.querySelector('.second-line');
    const thirdLine = document.querySelector('.third-line');
    const valueOfTransition = positionScrolling * 0.5;
    if(firstLine !== null && secondLine !== null && thirdLine !== null ){
        firstLine.style.transform = `translateX(-${valueOfTransition}px)`;
        secondLine.style.transform = `translateX(${valueOfTransition}px)`;
        thirdLine.style.transform = `translateX(-${valueOfTransition}px)`;
    }
    const ourPrograms = document.querySelector('.our-programs')
    const Programs = document.querySelectorAll('.program')

    Programs.forEach((element) => {

        const topOfOurProduct = ourPrograms.offsetTop - 800;
        const topScrollPrograms= element.offsetTop;

        if( (topScrollPrograms + topOfOurProduct) <= positionScrolling ){
            element.classList.add('display-program')
        }else{
            element.classList.remove('display-program')
        } 
    }); 

    // Show special elements and movements on the page why-egypt-page.html
    // Special animations for an landing on a page why-egypt-page.html

    const largeBalloon1 = document.querySelector(' .why-egypt-landing-large .balloon-1')
    const largeBalloon2 = document.querySelector(' .why-egypt-landing-large .balloon-2')
    const largeBalloon3 = document.querySelector(' .why-egypt-landing-large .balloon-3')
    const largeBalloon4 = document.querySelector(' .why-egypt-landing-large .balloon-4')
    const largeBalloon5 = document.querySelector(' .why-egypt-landing-large .balloon-5')
    const largeBalloon6 = document.querySelector(' .why-egypt-landing-large .balloon-6')
    const largeBalloon7 = document.querySelector(' .why-egypt-landing-large .balloon-7')
    const largeBalloon8 = document.querySelector(' .why-egypt-landing-large .balloon-8')
    const largeText = document.querySelector(' .why-egypt-landing-large .text')

    if(largeBalloon1 !== null){
        largeBalloon1.style.transform =`translateY(${positionScrolling / 2}px)`
        largeBalloon2.style.transform =`translateX(${positionScrolling / 2}px)`
        largeBalloon3.style.transform =`translateX(-${positionScrolling / 2.5}px)`
        largeBalloon4.style.transform =`translateY(${positionScrolling / 2.5}px)`
        largeText.style.transform =`translate(-50% , ${-50 + (positionScrolling / 8)}% )`
        largeBalloon5.style.transform =`translateX(-${positionScrolling / 2.5}px)`
        largeBalloon6.style.transform =`translateX(${positionScrolling / 2.5}px)`
        largeBalloon7.style.transform =`translateY(-${positionScrolling / 2.5}px)`
        largeBalloon8.style.transform =`translate(-50% , -${50 - positionScrolling / 4}% )`
    }

    const smallBalloon1 = document.querySelector(' .why-egypt-landing-small .balloon-1')
    const smallBalloon2 = document.querySelector(' .why-egypt-landing-small .balloon-2')
    const smallBalloon3 = document.querySelector(' .why-egypt-landing-small .balloon-3')
    const smallBalloon4 = document.querySelector(' .why-egypt-landing-small .balloon-4')
    const smallBalloon5 = document.querySelector(' .why-egypt-landing-small .balloon-5')
    const smallBalloon6 = document.querySelector(' .why-egypt-landing-small .balloon-6')
    const smallBalloon7 = document.querySelector(' .why-egypt-landing-small .balloon-7')
    const smallBalloon8 = document.querySelector(' .why-egypt-landing-small .balloon-8')
    const smallText = document.querySelector(' .why-egypt-landing-small .text')

    if(smallBalloon1 !== null){
        smallBalloon1.style.transform =`translateY(-${positionScrolling / 2.5}px)`
        smallBalloon2.style.transform =`translateX(-${positionScrolling / 2.5}px)`
        smallBalloon3.style.transform =`translateX(${positionScrolling / 2.5}px)`
        smallBalloon4.style.transform =`translateY(-${positionScrolling / 2.5}px)`
        smallText.style.transform =`translate(-50% , ${-50 + (positionScrolling / 20)}% )`
        smallBalloon5.style.transform =`translateX(-${positionScrolling / 2.5}px)`
        smallBalloon6.style.transform =`translateX(${positionScrolling / 2.5}px)`
        smallBalloon7.style.transform =`translateY(-${positionScrolling / 2.5}px)`
        smallBalloon8.style.transform =`translate(-50% , -${50 - positionScrolling / 4}% )`
    }

// Special animations for an text on a page why-egypt-page.html

    const infoOfFirstBox = document.querySelector('.why-egypt .first-box')  
    const infoOfSecondBox = document.querySelector('.why-egypt .second-box')  
    const infoOfThirdBox = document.querySelector('.why-egypt .third-box') 

    if(infoOfFirstBox !== null && infoOfSecondBox !== null && infoOfThirdBox !== null){
        const topOfFirstBox = infoOfFirstBox.offsetTop;
        const bottomOfFirstBox = topOfFirstBox + infoOfFirstBox.offsetHeight + 1300
        const imageRight = document.querySelector('.why-egypt .first-box .right') 
        const infoLeft = document.querySelector('.why-egypt .first-box .info-left') 
         
        if(imageRight !== null){
            if (positionScrolling >= topOfFirstBox && positionScrolling < bottomOfFirstBox) {
                imageRight.classList.add('active-image'); 
            }else{
                imageRight.classList.remove('active-image'); 
            }
        }
        if(infoLeft !== null){
            if (positionScrolling >= topOfFirstBox && positionScrolling < bottomOfFirstBox) {
                infoLeft.classList.add('active-info'); 
            }else{
                infoLeft.classList.remove('active-info'); 
            }
        }

        const topOfSecondBox = infoOfSecondBox.offsetTop;
        const bottomOfSecondBox = topOfSecondBox + infoOfSecondBox.offsetHeight + 1300
        const imageLeft = document.querySelector('.why-egypt .second-box .left') 
        const infoRight = document.querySelector('.why-egypt .second-box .info-right') 

        if(imageLeft !== null){
            if (positionScrolling >= topOfSecondBox && positionScrolling < bottomOfSecondBox) {
                imageLeft.classList.add('active-image'); 
            }else{
                imageLeft.classList.remove('active-image'); 
            }
        }
        if(infoRight !== null){
            if (positionScrolling >= topOfSecondBox && positionScrolling < bottomOfSecondBox) {
                infoRight.classList.add('active-info'); 
            }else{
                infoRight.classList.remove('active-info'); 
            }
        }

        const topOfThirdBox = infoOfThirdBox.offsetTop ;
        const bottomOfThirdBox = topOfThirdBox + infoOfThirdBox.offsetHeight + 1300
        const thirdImage = document.querySelector('.why-egypt .third-box .right') 
        const thirdInfo = document.querySelector('.why-egypt .third-box  .info-left') 
         
        if(thirdImage !== null){
            if (positionScrolling >= topOfThirdBox && positionScrolling < bottomOfThirdBox) {
                thirdImage.classList.add('active-image'); 
            }else{
                thirdImage.classList.remove('active-image'); 
            }
        }
        if(thirdInfo !== null){
            if (positionScrolling >= topOfThirdBox && positionScrolling < bottomOfThirdBox) {
                thirdInfo.classList.add('active-info'); 
            }else{
                thirdInfo.classList.remove('active-info'); 
            }
        }
    }   

})

// play video

let playVideo = document.querySelector('.video i')

    playVideo.addEventListener('click', ()=>{
        
        document.querySelector('video').controls = true
        document.querySelector('video').play();
        playVideo.style.display = 'none'
    })

// loading page

window.onload = function() {

    setTimeout(()=>{
		document.querySelector(".loading").remove();		
	}, 1000);
};

// ==========================================teacher page actions==============================================

//When you press filter button, it displays the filters window.

let filtersButton = document.querySelector('.our-projects .filters-button')
    if(filtersButton !== null){
        filtersButton.addEventListener('click', ()=>{

            const filterList = document.querySelector('.filter-list')
            filterList.classList.add('active-filter-list')

            const listBefore = document.querySelector('.list-before')
            listBefore.classList.add('active-list-before')

            listBefore.addEventListener('click', ()=>{

                filterList.classList.remove('active-filter-list') 
                listBefore.classList.remove('active-list-before')
            })
        })
    }

// When you click on the filter type, it displays a list of filters for that type.

let LCs = document.querySelector('.LCs') 
let Duration = document.querySelector('.Duration') 
let Project = document.querySelector('.Project') 
let firstList = document.querySelector('.filter-list .list')
let secondList = document.querySelector('.filter-list .second')
let thirdList = document.querySelector('.filter-list .third')

    if(LCs !== null){
        LCs.addEventListener('click', ()=>{
            LCs.classList.add('active-filter') 

            if(Duration !== null){
                Duration.classList.remove('active-filter') 
            }
            if(Project !== null){
                Project.classList.remove('active-filter') 
            }
            if(firstList !== null){
                firstList.style.display = "flex"
            }
            if(secondList !== null){
                secondList.style.display = "none"
            }
            if(thirdList !== null){
                thirdList.style.display = "none"
            }
        })
    }
    if(Duration !== null){
        Duration.addEventListener('click', ()=>{
            Duration.classList.add('active-filter') 

            if(LCs !== null){
                LCs.classList.remove('active-filter') 
            }
            if(Project !== null){
                Project.classList.remove('active-filter') 
            }
            if(secondList !== null){
                secondList.style.display = "flex"
            }
            if(firstList !== null){
                firstList.style.display = "none"
            }
            if(thirdList !== null){
                thirdList.style.display = "none"
            }
        })
    }
    if(Project !== null){
        Project.addEventListener('click', ()=>{
            Project.classList.add('active-filter') 

            if(LCs !== null){
                LCs.classList.remove('active-filter') 
            }
            if(Duration !== null){
                Duration.classList.remove('active-filter') 
            } 
            if(thirdList !== null){
                thirdList.style.display = "flex"
            }
            if(firstList !== null){
                firstList.style.display = "none"
            }
            if(secondList !== null){
                secondList.style.display = "none"
            }
        })
    }

// When you click on any filter, it displays text.

let lableOfFirstList = document.querySelectorAll('.filter-list .list .box')
let opennigFilter = document.querySelector('.filter .projects p')

lableOfFirstList.forEach((element)=>{
    element.addEventListener('click', ()=>{
        opennigFilter.style.display = 'block' 
    })
})

// When you press the watch button, it opens his video.

function openVideo(nameOfId){

    const actualVideo = document.querySelector(`.destination-videos #${nameOfId}`)
    const activeVideo = document.querySelector(`.destination-videos #${nameOfId} video`)
    const buttonToPlayVideo = document.querySelector(`.destination-videos #${nameOfId} i`)
    const videoBefore = document.querySelector(`.videos-before`)

    actualVideo.style.display = "block";
    videoBefore.style.display = "block";

    buttonToPlayVideo.addEventListener('click', ()=>{

        activeVideo.controls = true
        activeVideo.play();
        buttonToPlayVideo.style.display = 'none'
    })

    videoBefore.addEventListener('click', ()=>{

        actualVideo.style.display = "none";
        videoBefore.style.display = "none";
        activeVideo.pause(); 
        activeVideo.currentTime = 0; 
    })
}







