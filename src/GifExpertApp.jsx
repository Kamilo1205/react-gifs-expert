import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  /* const onAddCategory = () => {
    setCategories([ ...categories, 'Ranma 1/2' ]);
  } */
  const onAddCategory = ( newCategory ) => {
    if ( categories.some( category => category == newCategory ) ) return;
    setCategories([ newCategory, ...categories ]);
  } 

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          //setCategories={ setCategories }
          onNewCategory={ value => onAddCategory( value ) }
        />

        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        

        {
          categories.map( category => (
            /* return <li key={ category }>{ category }</li> */
            <GifGrid 
              key={ category } 
              category={ category } />
          ))
        }
        
    </>
  )
}
