
import './Comments.css';
import OpinionOnWatch from './OpinionOnWatch';

function Comments(props) {
    const comments = props.comments;
    return <div>
    <table className="commentsTable">
        <tbody>
        <tr>
            <tr className="titelOfRecomments">תגובות:</tr>     
        </tr>
        <tr>
            <td className="allComments">{comments}</td>
        </tr>
        </tbody>
        
    </table>
    <OpinionOnWatch></OpinionOnWatch>
    </div>
}

export default Comments;