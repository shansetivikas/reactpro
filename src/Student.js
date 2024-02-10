const Student = ({stdnames}) => {

    // const stdData = stdnames.map((student) => {
    //     return <li>{student}</li>
    // });

    const stdData = stdnames.map((student) => {
       return (
          <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </tr>
       )
    })

     return(
        <>
            <table>
                {stdData}
            </table>
           
            {/* <ul>{stdData}</ul> */}
        </>
     )
}

export default Student;