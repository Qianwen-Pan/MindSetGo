import { Link } from 'react-router-dom';

 const ResourceList = ({resources, title}) => {

     return ( 
         <div className="resource-list">
             <h2>{title}</h2>
             {resources.map(resource => (
                 <div className="resource-preview" key={resource.id}>
                     <Link to={`/resources/${resource.id}`}>
                         <h2>{resource.title}</h2>
                         <p>Written by {resource.author}</p>
                     </Link>
                 </div>
             ))}
         </div>
      );
 }

 export default ResourceList; 