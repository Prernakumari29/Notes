import React, { useState } from 'react'

const App = () => {

// ---------------------------------------------use state for entering data-------------------------------------
  const [title,setTitle] = useState({
    main:'',
    detail:''
})

// ---------------------------------------------use State for the Cards Shown-------------------------------------------
const [cards , setCards] = useState([])


const submitted = (e)=>{
  e.preventDefault()
  const copyCards =[...cards]
  copyCards.push (title)
  setCards(copyCards);


  setTitle({
    main:'',
    detail:''
  })
}


// ------------------------------------------------Onchange function-----------------------------------------
const handled =(e)=>{
  const {name , value} = e.target;
  setTitle({...title, [name]:value});
}

// -------------------------------------------for deleting function------------------------------------------
const deleteNotes = (idx) =>{
  const del = [...cards]
  del.splice(idx,1)
  setCards(del)
}
  return (
    <div className='h-screen  bg-black lg:flex text-white overflow-y-hidden '>

{/* --------------------------------------------enter details---------------------------------- */}
      <form onSubmit={(e)=>{
        submitted(e)
      }}
       className='lg:w-1/2 flex flex-col' >
          <input className=" border rounded  p-3 m-2 " type="text" name='main' placeholder='your title' value={title.main} onChange={handled}/>
        <textarea className=" border rounded p-3 m-2 " name="detail" placeholder='describe it'  id="" value={title.detail} onChange={handled}></textarea>
        <button className=' border rounded p-3 m-2  bg-white text-black active:scale-95'>Add new</button>       
      </form>

    {/* -------------------------------------------Border--------------------------------------------------- */}
      <div className='lg:w-1/2 lg:border-l'>
      <div className='text-center'>
        <h1 className='text-3xl  inline-block border-b'> Your Notes </h1>
      </div>
      {/* --------------------------------------------cards--------------------------------------------------------- */}
        <div className=' flex flex-wrap gap-5 my-5 mx-6 h-full overflow-auto'>
          {cards.map(function(elem,idx){
            return <div key={idx} className=' h-56 w-56 py-12 px-8 bg-cover  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")] text-black'>
              <div className='  flex justify-between items-start'>
                <h3>{elem.main} <br /> <span className='text-gray-600'>{elem.detail}</span></h3>

                {/* -------------------------------deleting cards--------------------------------------------------------- */}
                <i onClick={()=>{
                  deleteNotes(idx)
                }} className="ri-close-line active:scale-90 bg-black h-6 w-6 rounded-full text-center text-white"></i>
                
              </div>
                          
              </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App
