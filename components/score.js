import { useEffect, useState } from "react"
import '../App.css'
export function Score(){
    const [score,setscore]=useState(0)
    const [prevList, setListPressed] = useState([]);
    const[bestscore,setbest]=useState(0)
    const upScore=()=>{
        let newscore=score+1
        setscore(newscore)
    }
    // divs.forEach(div=>div.addEventListener("click",upscore()))
    useEffect(() => {
        const divs = document.querySelectorAll(".grid-item")
        const handleDivClick = (event) => {
            const child = event.currentTarget.children[0];
            console.log(child.textContent,prevList)
            if(prevList.includes(child.textContent)){
                if (score>bestscore)
                {setbest(score)}
                setscore(0)
                setListPressed([])
                alert("You Lost!")
            }
            else{
                upScore();
                setListPressed((prevList) => [...prevList, child.textContent]);
            }
            
          };
      
          divs.forEach((div) => div.addEventListener("click", handleDivClick));
      
          // Cleanup the event listeners when the component unmounts
          return () => {
            divs.forEach((div) => div.removeEventListener("click", handleDivClick));
          };
        }, [score]);
    

    return(
        <div class="score">
           Current Score: {score}
           <div>Best Score: {bestscore}</div>
        </div>
    )
}
