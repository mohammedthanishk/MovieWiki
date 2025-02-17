import MovieCard from "../components/moviecard"
function Home () {
   
     
        const movies =[{id:"01",name:"Enthiran",url:"",alt:"Enthiran.jpg",release_date:"2010",info:""}

        ]
        return (<div className="Home">
            <div className="moviecards">
                {
                    movies.map(movie=> <MovieCard movie={movie} key={movie.id} />)
                }
            </div>
        </div>
    )
}export default Home