function Left(props) {
    return ( <div>
        <div >
            {props.team.map((ab) =>(
                 <div class="card text-bg-light mb-3">
                 <div class="card-header"><b>QUAID-E-AZAM Trophy</b></div>
                 <article>
                  <h6 style={{color:"red"}}><b>STUMPS</b></h6>
                   <h5 class="card-title">{ab.team1.Name}
                   <span><p class="card-text">{ab.team1.score}</p></span>
                   <span><p class="card-text">{ab.team1.overs}</p></span>
                   </h5>
                   </article>
                 <div class="card-body">
                   <h5 class="card-title">{ab.team2.Name}</h5>
                   <p class="card-text">{ab.team2.dis}</p>
                 </div>
                
                       </div>
            ))}
        </div>
        </div>  );
}

export default Left;