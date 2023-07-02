const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
var result = document.getElementById("head");
const btn = document.getElementById("button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("tfyhudjfk");
  result.innerHTML="";
  const InputValue = document.getElementById("search").value;
  let fontOption= document.getElementById("option");
// let text=document.getElementsByClassName("input");
fontOption.addEventListener("click",()=>{
  let sortOption=fontOption.value;
  switch (sortOption) {
    
    case 'cursive':
      console.log("ALL1");
      result.style.fontFamily="cursive";
      break;
    case 'fantasy':
      console.log("ALL2");
      result.style.fontFamily="fantasy";
      break;
    case 'Verdana':
      console.log("ALL3");
      result.style.fontFamily="Verdana";
      break;
    case 'Times New Roman':
      console.log("ALL4");
      result.style.fontFamily="Times New Roman";
      break;
    default:
      console.log("ALL5");
      result.style.fontFamily="Times New Roman";
      break;
  }

})
  fetch(`${url}${InputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    if(data.length){
        data.map((item)=>{
          let head=document.createElement('div');
          head.className="headClassName";
          let head1=document.createElement('div');
          head1.className="head1ClassName";
          let head2=document.createElement('div');
          head2.className="head2ClassName";

          let newData=document.createElement('h2');
          newData.className="heading";
          newData.innerHTML=item.word;
          head1.appendChild(newData);

          let phone=document.createElement('h3');
          phone.className="phoneticClassName";
          phone.innerHTML=item.phonetic || "";
          head1.appendChild(phone); 

          let audiosrc=item.phonetics.filter((items) => items.audio!=="")
          let beat=new Audio(audiosrc[0].audio);
          beat.pause();
          let image=document.createElement('img');
          image.src="icon-play.svg";
          image.setAttribute('id',"play");
          image.addEventListener("click",function(){
          beat.play();
          })
          head2.appendChild(image);
          head.appendChild(head1);
          head.appendChild(head2);
          result.appendChild(head);
          
          item.meanings.map((nxtItem)=>{
            let pof=document.createElement('h3');
            pof.className="pofClassName";
            pof.innerHTML=nxtItem.partOfSpeech;
            result.appendChild(pof);

            let line=document.createElement('hr');
            line.className="lineClassName";
            result.appendChild(line);

            let definitionHeading=document.createElement('h3');
            definitionHeading.className="definitionHeadingclassName";
            definitionHeading.innerHTML="Meaning";
            result.appendChild(definitionHeading);

            nxtItem.definitions.map((defi)=>{
              let definition=document.createElement('li');
              definition.className="definitionClassName";
              definition.innerHTML=defi.definition;
              result.appendChild(definition);
            });

            let synonymHeading=document.createElement('h3');
            synonymHeading.className="synonymHeadingclassName";
            synonymHeading.innerHTML="Synonyms";
            result.appendChild(synonymHeading);

            let synonym=document.createElement('p');
            synonym.className="synonymsClassName";
            synonym.innerHTML=nxtItem.synonyms;
            result.appendChild(synonym);
            // nxtItem.synonyms.map((syno)=>{
            //   let synonym=document.createElement('p');
            //   synonym.className="synonymsClassName";
            //   synonym.innerHTML=syno;
            //   result.appendChild(synonym);
            // })
          });
          let line=document.createElement('hr');
          line.className="lineClassName";
          result.appendChild(line);

          let sourceHeading=document.createElement('h5');
          sourceHeading.className="sourceHeadingclassName";
          sourceHeading.innerHTML="Source";
          result.appendChild(sourceHeading);

          let source=document.createElement('a');
          source.className="sourceClassName";
          source.setAttribute('href',item.sourceUrls);
          source.innerHTML=item.sourceUrls;
          result.appendChild(source);

        }
        )
    }
    else{
      let errorMessage1=document.createElement('p');
      errorMessage1.className="errorMessage1Class";
      errorMessage1.innerHTML=data.title;
      result.appendChild(errorMessage1);
      let errorMessage2=document.createElement('p');
      errorMessage2.className="errorMessage2Class";
      errorMessage2.innerHTML=data.message;
      result.appendChild(errorMessage2);
      let errorMessage3=document.createElement('p');
      errorMessage3.className="errorMessage3Class";
      errorMessage3.innerHTML=data.resolution;
      result.appendChild(errorMessage3);
    }
});
});
document.getElementById("toggle").addEventListener("click", function(){
  document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
