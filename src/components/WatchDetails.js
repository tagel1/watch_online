
import './WatchDetails.css';

function WatchDetails(props) {    
    const titel = props.titel;
    const brand = props.brand;
    const description = props.description;
    const price = props.price;

    return <div>
<table className="tableForDetails">
    <tbody>
        <tr>
            <td className="titel">שם המותג:</td>
            <td className="infoOfWatch">{titel}</td>
        </tr>
        <tr>
            <td className="titel">דגם:</td>
            <td className="infoOfWatch">{brand}</td>
        </tr>
        <tr>
            <td className="titel">מחיר:</td>
            <td className="infoOfWatch">{price}</td>
        </tr>
        <tr>
            <td className="titel">תיאור המוצר:</td>
            <td className="infoOfWatch">{description}</td>
        </tr>
        </tbody>
    </table>

    </div>
     

}
export default WatchDetails;