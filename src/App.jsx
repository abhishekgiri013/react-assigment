
import './App.css';
import BasketballPlayerCard from './card'; 

function App() {
 

  return (
    <>
         <div className=' flex justify-center text-3xl font-serif font-extrabold text-red-700'>
               <h1>BASKETBALL PLAYERS</h1>
          </div>
      <div className='flex'>
          
      <BasketballPlayerCard
       name="Michael Jordon"
       position="Shooting Guard"
       image="./pic1.jpeg"
       data= "pointsPerGame: 27 points AssistsPerGame :9  ReboundsPerGame:11"
       />
      <BasketballPlayerCard
      name="LeBron James"
      position="Power Forward"
      image="./pic2.jpg"
      data= "pointsPerGame: 25 points AssistsPerGame :7  ReboundsPerGame:10"
     />
      <BasketballPlayerCard
      name="Bill Russel"
      position="Power Forward"
      image="./images.jpeg"
      data= "pointsPerGame: 25 points AssistsPerGame :7  ReboundsPerGame:10"
     />
      </div>
    </>
  )
}


export default App
