

const Student = ({studentDetails}) => {
    

    const students = studentDetails.map(student => 
        <li>{student}</li>
    );
    return <ul>{students}</ul>


}


export default Student;