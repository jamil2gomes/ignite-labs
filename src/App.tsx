import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql `
  query{
    lessons{
      title,
      id
    }
  }
`;


interface Lessons {
  id:string;
  title:string;
}
function App() {

   const {data} = useQuery<{lessons:Lessons[]}>(GET_LESSONS_QUERY);

  return (
    <div className="App">
    
        <ul>
          {
            data?.lessons.map(lesson => (
              <li key={lesson.id}>{lesson.title}</li>
            ))
          }
        </ul>
       
    </div>
  )
}

export default App
