import ResourceList from '../components/ResourceList';
//import useFetch from './useFetch';

 const Resources = () => {
    const {data: resources, isPending, error} = fetch('http://localhost:5001/resources');

    return ( 
        <div className="resources">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <ResourceList resources={resources} title="All Resources"/>
        </div>
     );
 }

 export default Resources; 