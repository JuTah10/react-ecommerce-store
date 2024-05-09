import { Link } from "react-router-dom"
export default function Portion({objects}){
    console.log(objects)
    return(
        <div className="portion-container">
            <div className="portion-intro">
                <div className="portion-title">{objects[0].title}</div>
                <Link>Edit</Link>
            </div>
            {objects.map((object)=>{
                return (
                    <div className="portion-main-content">
                        {object.categoriesName 

                            ? 
                            <div style={{fontSize: "10px"}}className={object.categoriesNameSize? object.categoriesNameSize : null}>
                                {object.categoriesName}
                            </div> 
                            : 
                            null
                        }


                        {object.categoriesDescription 
                
                            ? 
                            <div className={object.desSize ? object.desSize : null}>
                                {object.categoriesDescription}
                            </div>
                            :    
                            null
                        }

                    </div>
                );
                
            })}
            
        </div>
    );
}